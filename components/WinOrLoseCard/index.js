// Write your code here.
import './index.css'

const WinOrLoseCard = ({iswon, onClickPlayAgain, score}) => {
  const isWonImg = iswon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const wonlabel = iswon ? 'You Won' : 'You Lose'
  const scoreLabel = iswon ? 'Best Score' : 'Score'

  return (
    <div className="won-or-lose-container">
      <div>
        <h1 className="won-or-lose-heading">{wonlabel}</h1>
        <p className="won-or-lose-heading">{scoreLabel}</p>
        <p className="score-para">{score}/12</p>
        <button className="score-button" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
      <img src={isWonImg} alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
