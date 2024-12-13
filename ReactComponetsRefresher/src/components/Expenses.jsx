import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from './Card';

export default function Expenses({ expenses }) {
    return (
        <Card className="expenses">
            {expenses.map((expenses, index) => (
                <ExpenseItem 
                    key={index}
                    title={expenses.title} 
                    amount={expenses.amount} 
                    date={expenses.date}>
                </ExpenseItem>
            ))}
        </Card>
    );
}