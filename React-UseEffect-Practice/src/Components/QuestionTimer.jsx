import { useState, useEffect} from 'react';

export default function QuestionTimer({ timeout, onTimeout, mode}) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        console.log('Setting timeout');
        const timer = setTimeout(onTimeout, timeout);

        return () => {
            clearTimeout(timer); // Cleanup
        };
    }, [timeout, onTimeout]);

    useEffect(() => {
        console.log('Setting interval');
        const interval = setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
        }, 100);

        return () => {
            clearInterval(interval); // Cleanup
        };
    }, []);
    
    return (
        <progress 
        id="question-time" 
        max={timeout} 
        value={remainingTime}
        className={mode}/>
    );
}
