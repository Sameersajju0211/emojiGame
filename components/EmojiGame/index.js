/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojiList: [],
    isGameInProgess: true,
    topScore: 0,
  }

  resetGame = () => {
    this.setState({clickedEmojiList: [], isGameInProgess: true})
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    const iswon = clickedEmojiList.length === emojisList.length

    return (
      <WinOrLoseCard
        iswon={iswon}
        onClickPlayAgain={this.resetGame}
        score={clickedEmojiList.length}
      />
    )
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }

    this.setState({topScore: newTopScore, isGameInProgess: false})
  }

  getshuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojilist = () => {
    const shuffledEmojiList = this.getshuffledEmojisList()

    return (
      <ul className="Emoji-list-container">
        {shuffledEmojiList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emojiDetails={eachEmoji}
            clickedEmoji={this.clickedEmoji}
          />
        ))}
      </ul>
    )
  }

  clickedEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    const isEmojipresent = clickedEmojiList.includes(id)
    const clickedEmojiLength = clickedEmojiList.length

    if (isEmojipresent) {
      this.finishGameAndSetTopScore(clickedEmojiLength)
    } else {
      if (emojisList.length - 1 === clickedEmojiLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojiList: [...prevState.clickedEmojiList, id],
      }))
    }
  }

  render() {
    const {clickedEmojiList, topScore, isGameInProgess} = this.state

    return (
      <div className="bg-container">
        <NavBar
          currentScore={clickedEmojiList.length}
          isGameInProgess={isGameInProgess}
          topScore={topScore}
        />
        <div className="emoji-game">
          {isGameInProgess ? this.renderEmojilist() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
