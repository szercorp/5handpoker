import React from 'react'
import { connect } from 'react-redux'
import { displayCards } from '../../../../models/5handpoker'
import './DisplayButton.css'

const DisplayButton = ({onClickDisplayCards}) => (
    <button
        className="DisplayButton-Wrapper"
        onClick={onClickDisplayCards}
    >
        Display cards
    </button>
)

const mapDispatchToProps = dispatch => ({
    onClickDisplayCards: () => {
        dispatch(displayCards())
    }
})

export default connect(undefined, mapDispatchToProps)(DisplayButton)