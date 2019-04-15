import React from 'react'
import { PokerHandRate, RateableCards } from '../../../../libraries'
import './PlayerEvaluator.css'

const PlayerEvaluator = ({cards}) => (
    <div className="PlayerEvaluator">
        Player's Combination is: {cards.length !== 0 && PokerHandRate(new RateableCards(cards))[0]}
    </div>
)

export default PlayerEvaluator