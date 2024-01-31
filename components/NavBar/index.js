// Write your code here.
import './index.css'

import React from 'react'

const NavBar = ({currentScore, isGameInProgess, topScore}) => {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="emoji-logo"
          />
          <h1 className="emoji">Emoji Game</h1>
        </div>
        {isGameInProgess && (
          <div className="score-container">
            <p className="score">Score: {currentScore}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
