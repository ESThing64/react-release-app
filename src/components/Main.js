import {useState} from 'react'
import QuestionA from './releases/QuestionA'
import QuestionB from './releases/QuestionB'
import QuestionC from './releases/QuestionC'
import QuestionD from './releases/QuestionD'
import QuestionE from './releases/QuestionE'


console.log("hey bro");

function Main() {
    const [questionTracker, setQuestionTracker] = useState(3);

    const incrementQuestion = ()=> {
        console.log(questionTracker);
        
        setQuestionTracker((questionTracker +1))
    }
    
    const QuestionBBlock = (<QuestionB onClick={incrementQuestion} />)
    const QuestionABlock = (<QuestionA onClick={incrementQuestion} />)
    const QuestionCBlock = (<QuestionC onClick={incrementQuestion} />)
    const QuestionDBlock = (<QuestionD onClick={incrementQuestion} />)
    const QuestionEBlock = (<QuestionE onClick={incrementQuestion} />)
    return (
        <div>
            {/* questionA */}
            {(questionTracker === 1) && <QuestionA onClick={incrementQuestion} />}
            {(questionTracker === 2) && <QuestionB onClick={incrementQuestion} />}
            {(questionTracker === 3) && <QuestionC onCick={incrementQuestion} />}
            {(questionTracker === 4) && <QuestionD onClick={incrementQuestion} />}
            {(questionTracker === 5) && <QuestionE onClick={incrementQuestion} />}
           
        </div>
    )
}

export default Main
