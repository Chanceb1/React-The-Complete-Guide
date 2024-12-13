import './ExpenseItem.css';
import ExpenseData from './ExpenseDate';
import Card from './Card';

export default function ExpenseItem({ title, amount, date }) {
    // const expenseDate = new Date(2021, 2, 28); 
    // const expenseTitle = 'Car insurance';
    // const expenseAmount = 294.67;

    return (
        <Card className='expense-item'>
            <ExpenseData date={date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
        </Card>
    );
}