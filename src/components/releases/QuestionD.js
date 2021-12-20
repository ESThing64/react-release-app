import React from 'react'

function QuestionD(props) {
    return (
        <div>
             <h2>Would I let go?</h2>
            <button onClick={props.incrementQuestion}>Yes</button>
            <button onClick={props.incrementQuestion}>No</button>
        </div>
    )
}

export default QuestionD
