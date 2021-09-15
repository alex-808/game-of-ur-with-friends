import React, { useState, useEffect, useRef } from 'react'
import './App.scss'
import { Game } from './components/Game'
import { LandingPage } from './components/LandingPage'
import { WaitingRoom } from './components/WaitingRoom'
import io from 'socket.io-client'

const socket = io('http://localhost:5000')
socket.on('connect', () => {
  //socket.emit('newGame')
  console.log('connected')
})

function App() {
  //const game = useRef(new Game())
  const [gameState, setGameState] = useState<GameI>()
  const [roomID, setRoomID] = useState('')
  socket.on('roomID', (ID: string) => {
    console.log(ID)
    setRoomID(ID)
  })

  socket.on('init', (state: GameI) => {
    init(state)
  })
  socket.on('noRoom', () => {
    console.log('Empty room')
  })
  socket.on('roomFull', () => {
    console.log('Room full')
  })
  //game.current.addPlayer()
  //game.current.addPlayer()

  const init = (state: GameI) => {
    console.log('Initializing game')
    setGameState(state)
  }

  useEffect(() => {
    //game.current.updateBoard()
    //setGameState({ ...game.current })
  }, [])

  const createNewGame = () => {
    console.log('creating new game')
    socket.emit('newGame')
  }

  const joinGame = (roomID: string) => {
    console.log('Joining game', roomID)
    setRoomID(roomID)
    socket.emit('joinGame', roomID)
  }

  const handleTokenClick = () => {
    console.log('token clicked')
  }

  const rollDice = () => {
    console.log('Dice rolled')
  }

  const resetGame = () => {
    console.log('Game reset')
  }
  let view
  if (!gameState && !roomID) {
    view = <LandingPage createNewGame={createNewGame} joinGame={joinGame} />
  } else if (!gameState && roomID) {
    view = <WaitingRoom roomID={roomID} />
  } else if (gameState && roomID) {
    view = (
      <Game
        gameState={gameState}
        handleTokenClick={handleTokenClick}
        rollDice={rollDice}
        resetGame={resetGame}
      />
    )
  }
  return <div className="App">{view}</div>
}

export default App
