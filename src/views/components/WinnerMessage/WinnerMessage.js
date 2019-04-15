import React from 'react'
import { connect } from 'react-redux'
import { CompareHands } from '../../../libraries'
import './WinnerMessage.css'

const WinnerMessage = ({ player, opponent, level }) => (
    <div className="message">
        {(CompareHands(player.cards) > CompareHands(opponent.cards) 
            ? 'The Winner is: Player' 
            : 'The Winner is: Opponent')
        }
    </div>
);

const mapStateToProps = ({ players, level }) => ({
  player: players.player,
  opponent: players.opponent,
  level,
});

export default connect(mapStateToProps)(WinnerMessage);