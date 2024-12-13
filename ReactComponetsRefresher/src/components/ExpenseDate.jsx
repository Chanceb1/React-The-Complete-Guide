import './ExpenseDate.css';

export default function ExpenseDate({ date }) {
    // helper consts to format date
    const month = date.toLocaleString('en-US', {month: 'long'});
    const day = date.toLocaleString('en-US', {day: '2-digit'});
    const year = date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{date.toLocaleString('en-US', {month: 'long'})}</div>
            <div className="expense-date__day">{date.toLocaleString('en-US', {day: '2-digit'})}</div>
            <div className="expense-date__year">{date.getFullYear()}</div>
        </div>
    );
}