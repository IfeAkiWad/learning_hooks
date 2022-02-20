import React, { useReducer} from 'react'
import reducer from './reducer'
import initialMoods from './initialMoods'

const Mood = () => {
  const [moods, dispatch] = useReducer(reducer, initialMoods)

  const handleEmoji = (mood) => {
    dispatch({type: "CHECK_EMOJI", id: mood.id})
  }

  return (
    
    <div>
      <h1>How are you today?</h1>
      {moods.map(mood => {
        return <div key={mood.id}>
          <h2><input 
          type="checkbox"
          checked={mood.check}
          onChange={() => handleEmoji(mood)}
          /> {mood.emoji}
          </h2>
        </div>
      })}
     <br /><br />
    </div>
  )
}
export default Mood
