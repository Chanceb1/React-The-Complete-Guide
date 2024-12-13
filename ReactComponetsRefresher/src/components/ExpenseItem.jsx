import './ExpenseItem.css';
import ExpenseData from './ExpenseDate';
import Card from './Card';
import { useState } from 'react';

export default function ExpenseItem({ title, amount, date }) {
    // const expenseDate = new Date(2021, 2, 28); 
    // const expenseTitle = 'Car insurance';
    // const expenseAmount = 294.67;

    const [newTitle, setNewTitle] = useState(title);

    function handleClick() {
        setNewTitle('updated');
    }

    return (
        <Card className='expense-item'>
            <ExpenseData date={date}/>
            <div className="expense-item__description">
                <h2>{newTitle}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
            <button onClick={handleClick}>change title</button>
        </Card>
    );
}