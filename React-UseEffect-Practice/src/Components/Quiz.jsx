import { useState , useCallback} from 'react';
import questions from '../question.js';
import Question from './Question.jsx';
import Summary from './Summary.jsx';

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsOver = activeQuestionIndex === questions.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });

    }, []);

    const handleSkipAnswer = useCallback(
        () => handleSelectAnswer(null), [handleSelectAnswer]
    );

    if (quizIsOver){
        <Summary userAnswers={userAnswers} questions={questions} />;
    }

    return (
        <div id="quiz">
            <Question 
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSelectAnswer}/>
        </div>
    );
}