import _ from 'lodash'

// Example implementation used in the Think Functional course

//
//  Util Functions
//
function deepFreeze(object) {
  if (typeof object !== 'object') {
    return object;
  }
  Object.freeze(object)
  
  Object.values(object)
    .forEach(value => deepFreeze(value))
  
  return object
}

const maxInARow = weights =>
  _.chain(weights)
    .sortBy()
    .uniq()
    .map((num, i) => num - i)
    .groupBy()
    .orderBy('length')
    .last()
    .value()
    .length

//
// Playing Cards class definition and implementation
// in a functional fashion
//
const Ranks = Object.freeze([ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ]);
const Suits = Object.freeze([ 'hearts', 'clubs', 'diams', 'spades' ]);

export const Cards = deepFreeze(
  Object.entries(Ranks).reduce(
    (cards, [ weight, rank ]) =>
      [...cards, ...Suits.map(suit => ({ rank, suit, weight }))],
    []
  )
)

export const CardsAndDeck = (currentDeck, n = 0) => {
  const deck = currentDeck !== Cards
    ? currentDeck
    : currentDeck.slice(0).sort(() => Math.random() - 0.5)

  Object.freeze(deck);

  const cards = deck.slice(0, n).sort((x, y) => x.weight - y.weight)
  
  Object.freeze(cards)

  return {
    cards,
    deck: deck.slice(n, deck.length),
  }
}

export class RateableCards {
  constructor(cards) {
    this.ranks = _.groupBy(cards, 'rank');
    this.suits = _.groupBy(cards, 'suit');
    this.rankTimes = _.groupBy(this.ranks, 'length');
    this.suitTimes = _.groupBy(this.suits, 'length');
    this.maxInARow = maxInARow(cards.map(({ weight }) => weight));
  }

  getOfSameRank(n) { return this.rankTimes[n] || []; }

  getOfSameSuit(n) { return this.suitTimes[n] || []; }

  hasAce() { return !!this.ranks['A']; }

  hasOfSameRank(n) { return this.getOfSameRank(n).length; }

  hasOfSameSuit(n) { return this.getOfSameSuit(n).length; }

  hasInARow(n) { return this.maxInARow >= n; }

  getWorstSingles() {
    return _.chain(this.getOfSameRank(1))
      .flatten()
      .sortBy('weight')
      .value();
  }
}

const PokerRating = {
  'Royal Flush': {is: hand => hand.hasInARow(5) && hand.hasOfSameSuit(5) && hand.hasAce(), value: 'J'},
  'Straight Flush': {is: hand => hand.hasInARow(5) && hand.hasOfSameSuit(5), value: 'I'},
  'Four Of A Kind': {is: hand => hand.hasOfSameRank(4), value: 'H'},
  'Full House': {is: hand => hand.hasOfSameRank(3) && hand.hasOfSameRank(2), value: 'G'},
  'Flush': {is: hand => hand.hasOfSameSuit(5), value: 'F'},
  'Straight': {is: hand => hand.hasInARow(5), value: 'E'},
  'Three Of A Kind': {is: hand => hand.hasOfSameRank(3), value: 'D'},
  'Two Pairs': {is: hand => hand.hasOfSameRank(2) >= 2, value: 'C'},
  'One Pair': {is: hand => hand.hasOfSameRank(2), value: 'B'},
  'High Card': {is: hand => hand.hasOfSameRank(1) >= 5, value: 'A'},
};

export const PokerHandRate = cards => Object.entries(PokerRating).find(([, {is}]) => is(cards));


export const CompareHands = (cards) => {
  const ValueOfHand = PokerHandRate(new RateableCards(cards))[1].value
  const ValueOfCard = _.sortBy(_.groupBy(cards, 'weight'), 'length')
  .map( elem => String.fromCharCode(65 + parseInt(elem[0].weight)) )
  .reduceRight(
    (acc, curr) => acc + curr,
    ""
  )
  const winner = ValueOfHand + ValueOfCard

  return winner
}