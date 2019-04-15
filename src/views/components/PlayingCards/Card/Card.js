import React from 'react'

const Card = ({card}) => {
    return (
        <a className={`card rank-${card.rank} ${card.suit}`} href="#">
            <span className="rank">{card.rank}</span>
            <span className="suit"></span>
        </a>
    )
}

export default Card