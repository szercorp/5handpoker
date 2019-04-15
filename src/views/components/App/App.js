import React from 'react'
import { connect } from 'react-redux'
import Table from '../Table/Table'
import DealButton from '../Buttons/DealButton/DealButton'
import ResetButton from '../Buttons/ResetButton/ResetButton'
import OpponentHand from '../Hand/OpponentHand/OpponentHand'
import PlayerHand from '../Hand/PlayerHand/PlayerHand'
import ChangeButton from '../Buttons/ChangeButton/ChangeButton'
import DisplayButton from '../Buttons/DisplayButton/DisplayButton'
import '../../../styles/CardsStyles/cards.css'
import './App.css'
import WinnerMessage from '../WinnerMessage/WinnerMessage';

const App = ({player, opponent, level}) => (
    <div className="playingCards simpleCards">
        <div className="App-Wrapper">
            <Table />
            <ResetButton />
            {(level === 1 || level === 2 || level === 3) && <OpponentHand {...opponent} level={level} />}
            <DealButton />
            {level === 3 && <WinnerMessage />}
            {(level === 1 || level === 2 || level === 3) && <PlayerHand {...player} />}
            {level === 1 && <ChangeButton />}
            {level === 2 && <DisplayButton />}
        </div>
    </div>
)

const mapStateToProps = ({ players, level }) => ({
    player: players.player,
    opponent: players.opponent,
    level,
})
  

export default connect(mapStateToProps, null)(App)