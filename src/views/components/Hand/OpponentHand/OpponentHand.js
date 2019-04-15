import React from 'react'
import CardBackHand from '../../PlayingCards/CardBackHand/CardBackHand'
import Cards from '../../PlayingCards/Cards/Cards'
import './OpponentHand.css'
import OpponentEvaluator from '../OpponentEvaluator/OpponentEvaluator'

const OpponentHand = ({level, cards}) => (
    <div className="OpponentHand-Wrapper">
        {level < 3 ? <CardBackHand /> : <Cards cards={cards} />}
        {level === 3 && <OpponentEvaluator cards={cards} />} 
    </div>
)

export default OpponentHand