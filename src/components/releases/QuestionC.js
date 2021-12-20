import React from 'react'

function QuestionC(props) {
    return (
        <div>
              <h2>Could I let this feeling go?</h2>
            <button onClick={props.incrementQuestion}>Yes</button>
            <button onClick={props.incrementQuestion}>No</button>
        </div>
    )
}

export default QuestionC
