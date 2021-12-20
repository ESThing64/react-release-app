import React from 'react'

function QuestionA(props) {
    return (
        <div>
            <h2 className='question'>What is my now feeling about this topic ?</h2>
            <input type="text"></input>
            <button onClick={props.incrementQuestion} >continue</button>
        </div>
    )
}

export default QuestionA
