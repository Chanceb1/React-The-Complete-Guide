import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import TodosContextProvider from './store/todo-context';

function App() {
  return (
    <TodosContextProvider>
      <h1 className='App'>My Todos</h1>
      <NewTodo/>
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
