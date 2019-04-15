import React from 'react'
import CardBack from '../PlayingCards/CardBack/CardBack'
import './Deck.css'

const Deck = () => (
    <div className="Deck-Wrapper">
        <ul className="deck">
            <CardBack />
            <CardBack />
            <CardBack />
            <CardBack />
            <CardBack />
        </ul>
    </div>
)

export default Deck;