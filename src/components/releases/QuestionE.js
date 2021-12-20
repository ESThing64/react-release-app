import React from 'react'

function QuestionE(props) {
    return (
        <div>
              <h2>When?</h2>
            <button onClick={props.incrementQuestion} >Now</button>
            <button onClick={props.incrementQuestion} >Not now</button>
            <button onClick={props.incrementQuestion} >Never!</button>
        </div>
    )
}

export default QuestionE
