import React from 'react'
import { connect } from 'react-redux'
import { dealCards } from '../../../../models/5handpoker'
import './DealButton.css'

const DealButton = ({level, onClickDealCards}) => {
    if (level === 0) {
        return (   
            <button
                className="DealButton-Wrapper"
                onClick={onClickDealCards}
            >
                Deal Cards
            </button>
        )
    } else {
        return null
    }
}

const mapStateToProps = level => level

const mapDispatchToProps = dispatch => ({
    onClickDealCards: () => {
        dispatch(dealCards())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(DealButton)