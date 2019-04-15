import React from 'react'
import { connect } from 'react-redux'
import { changeCards } from '../../../../models/5handpoker'
import './ChangeButton.css'

const ChangeButton = ({onClickChangeCards, checkedCards}) => (
    <button 
        className="ChangeButton-Wrapper"
        onClick={() => onClickChangeCards(checkedCards)}    
    >
        Change Cards
    </button>
)

const mapStateToProps = ({checkedCards, level}) => ({
    checkedCards,
    level
})

const mapDispatchToProps = dispatch => ({
    onClickChangeCards: (checkedCards) => {
        dispatch(changeCards(checkedCards))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ChangeButton)