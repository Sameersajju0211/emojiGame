// Write your code here.

import './index.css'

const EmojiCard = ({emojiDetails, clickedEmoji}) => {
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmojiId = () => {
    clickedEmoji(id)
  }

  return (
    <li>
      <button className="button" onClick={onClickEmojiId}>
        <img src={emojiUrl} alt={emojiName} className="emoji-pic" />
      </button>
    </li>
  )
}

export default EmojiCard
