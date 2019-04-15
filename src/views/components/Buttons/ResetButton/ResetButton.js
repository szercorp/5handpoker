import React from 'react'
import { connect } from 'react-redux'
import { resetGame } from '../../../../models/5handpoker'
import './ResetButton.css'

const ResetButton = ({onClickResetGame}) => (
    <button 
        className="ResetButton-Wrapper"
        onClick={onClickResetGame}
    >
        Reset Game
    </button>
)

const mapDispatchToProps = dispatch => ({
    onClickResetGame: () => {
        dispatch(resetGame())
    }
})

export default connect(null, mapDispatchToProps)(ResetButton)