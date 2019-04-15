import React from 'react'
import { PokerHandRate, RateableCards } from '../../../../libraries'
import './OpponentEvaluator.css'

const OpponentEvaluator = ({cards}) => (
    <div className="OpponentEvaluator">
        Opponent's Combination is: {cards.length !== 0 && PokerHandRate(new RateableCards(cards))[0]}
    </div>
)

export default OpponentEvaluator