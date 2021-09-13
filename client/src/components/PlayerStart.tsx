import React from 'react'
import { Badge } from '@material-ui/core'
import * as constants from '../constants'
import { Token } from './Token'
import './PlayerStart.scss'

interface Props {
  player: PlayerI
  onClick: handleTokenClick
}

const PlayerStart: React.FC<Props> = ({ player, onClick }) => {
  return (
    <div
      className={`player${player.id}Start`}
      onClick={onClick.bind(null, player.id, constants.PLAYER_START)}
    >
      {player.tokens
        .filter(token => token === -1)
        .map(token => (
          <Token key={Math.random()} playerID={player.id} />
        ))}
    </div>
  )
}

export { PlayerStart }
