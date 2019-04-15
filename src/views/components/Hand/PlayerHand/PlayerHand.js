import React from 'react'
import Cards from '../../PlayingCards/Cards/Cards'
import PlayerEvaluator from '../PlayerEvaluator/PlayerEvaluator'
import './PlayerHand.css'

const PlayerHand = ({cards}) => (
    <div className="PlayerHand-Wrapper">
        <Cards cards={cards} />
        <PlayerEvaluator cards={cards} />
    </div>
)

export default PlayerHand