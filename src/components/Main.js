import React from 'react'
import QuestionA from './releases/QuestionA'
import QuestionB from './releases/QuestionB'
import QuestionC from './releases/QuestionC'
import QuestionD from './releases/QuestionD'
import QuestionE from './releases/QuestionE'


const QuestionABlock = (<QuestionA />)
const QuestionBBlock = (<QuestionB />)
const QuestionCBlock = (<QuestionC />)
const QuestionDBlock = (<QuestionD />)
const QuestionEBlock = (<QuestionE />)

const questionTracker = 2
function Main() {
    return (
        <div>
            {/* questionA */}
            {(questionTracker == 1) && QuestionABlock}
            {(questionTracker == 2) && QuestionBBlock}
            {(questionTracker == 3) && QuestionCBlock}
            {(questionTracker == 4) && QuestionDBlock}
            {(questionTracker == 5) && QuestionEBlock}
           
        </div>
    )
}

export default Main
