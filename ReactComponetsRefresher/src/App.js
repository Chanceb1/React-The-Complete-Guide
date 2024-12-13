import Expenses from "./components/Expenses";
import './index.css';
import React from 'react';

function App() {
  //this is imperative javascript code
  // const para = document.createElement('p');
  // para.textContent = 'this is visible';
  // document.getElementById('root').appendChild(para);

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // an alternative way to render the component
  // return React.createElement(
  //   'div', 
  //   {}, 
  //   React.createElement('h2', {}, 'Let\'s get started!'), 
  //   React.createElement(Expenses, {expenses: expenses})
  // );

  return (
    <div>
      <h1 className="output">React Expense Tracker !!</h1>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
