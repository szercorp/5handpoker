import React from 'react'

const CheckBoxCard = ({card, handleChecked}) => {
    //Because every single card has an index, the same cards have the same index so there was a problem selecting them
    const randomIndex = Math.floor(Math.random() * 10)
    return (
        <label htmlFor={card.weight + randomIndex} className={`card rank-${card.rank} ${card.suit}`}>
            <span className="rank">{card.rank}</span>
            <span className="suit"></span>
            <input 
                type="checkbox"
                name={card.weight + randomIndex} 
                id={card.weight + randomIndex} 
                onClick={handleChecked}
            />
        </label>
    )
}

export default CheckBoxCard