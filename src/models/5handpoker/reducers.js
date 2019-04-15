import { combineReducers } from 'redux'
import { Cards, CardsAndDeck } from '../../libraries'
import { dealCards, changeCards, displayCards, resetGame, selectACard, deselectACard } from './actions'

const playersInitialState = {
    player: {
        cards: [],
        id: 'Player'
    },
    opponent: {
        cards: [],
        id: 'Opponent'
    },
    deck: Cards
}

const players = (state = playersInitialState, action) => {
    switch(action.type) {
        case dealCards.type: {
            const playerHand = CardsAndDeck(state.deck, 5)
            const opponentHand = CardsAndDeck(playerHand.deck, 5)
            return {
                player: {
                    cards: playerHand.cards,
                    id: 'Player'
                },
                opponent: {
                    cards: opponentHand.cards,
                    id: 'Opponent'
                },
                deck: opponentHand.deck
            }
        }
        case changeCards.type: {
            const dealtCards = state.player.cards.filter(element => !action.payload.includes(element))
            const newCardsAndDeck = CardsAndDeck(state.deck, action.payload.length)
            const newDealtCards = [...dealtCards, ...newCardsAndDeck.cards].sort((x, y) => x.weight - y.weight)
            return {
                ...state,
                player: { 
                    cards: newDealtCards, 
                    id: 'Player' 
                },
                deck: newCardsAndDeck.deck,
            }
        }
        case resetGame.type:
            return playersInitialState
        default:
            return state
    }
}

const level = (level = 0, action) => {
    switch(action.type) {
        case dealCards.type:
            return 1
        case changeCards.type:
            return 2
        case displayCards.type:
            return 3
        case resetGame.type:
            return 0
        default:
            return level
    }
}

const checkedCards = (checkedCards = [], action) => {
    switch(action.type) {
        case selectACard.type:
            return [
                ...checkedCards, 
                action.payload
            ]
        case deselectACard.type:
            return [
                ...checkedCards.slice(0, checkedCards.indexOf(action.payload)), 
                ...checkedCards.slice(checkedCards.indexOf(action.payload) + 1)
            ]
        case resetGame.type:
            return []
        default:
            return checkedCards
    }
}

export const rootReducer = combineReducers({players, level, checkedCards})