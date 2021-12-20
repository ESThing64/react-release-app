import React from 'react'

function QuestionB({incrementQuestion}) {
    return (
        <div>
              <h2>Could I allow my self to welcome this feeling?</h2>
            <button type='button' onClick={incrementQuestion} >Yes</button>
            <button type='button' onClick={incrementQuestion} >No</button>
        </div>
    )
}

export default QuestionB
