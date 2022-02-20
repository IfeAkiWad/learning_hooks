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
     <a id="github" href="https://github.com/IfeAkiWad/learning_hooks/blob/master/src/useReducer/Mood.js" rel="noreferrer" target="_blank">Code</a><br />
     <a id="github" href="https://github.com/IfeAkiWad/learning_hooks/blob/master/src/useReducer/reducer.js" rel="noreferrer" target="_blank">Reducer Code</a><br />
     <a id="github" href="https://github.com/IfeAkiWad/learning_hooks/blob/master/src/useReducer/initialMoods.js" rel="noreferrer" target="_blank">Initial State Code</a>


    </div>
  )
}
export default Mood
