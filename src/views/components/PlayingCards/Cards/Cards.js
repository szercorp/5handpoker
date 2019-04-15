import React from 'react'
import { connect } from 'react-redux'
import { selectACard, deselectACard } from '../../../../models/5handpoker'
import CheckBoxCard from '../CheckBoxCard/CheckBoxCard'
import Card from '../Card/Card'

const Cards = ({cards, level, handleChecked, checkedCards}) => (
    <ul className="table">
        {cards.map(
            (card, index) => (
                <li key={index}>
                    {(level !== 2 && level !== 3) ?
                        <CheckBoxCard 
                            card={card} 
                            handleChecked={() => handleChecked(checkedCards, card)}  
                        /> : 
                        <Card card={card} />}
                </li>
            )
        )}
    </ul>
)

const mapStateToProps = ({level, checkedCards}) => ({ 
    level,
    checkedCards
})

const mapDispatchToProps = dispatch => ({
    handleChecked: (checkedCards, card) => {
        if(checkedCards.includes(card)){
            dispatch(deselectACard(card))
        } else {
            dispatch(selectACard(card));
        }
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Cards)
