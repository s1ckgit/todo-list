import { 
  type ChangeEvent, 
  type KeyboardEvent, 
  useRef, 
  useState } from 'react';

import type { 
  ITodoItem, 
  VisibilityMode
} from './model';
  
import TodoBar from './TodoBar';
import TodoItem from './TodoItem';
import './Todo.css'
import { ChevronRight } from '../../icons/index';
  
const Todo = () => {
  const [todos, setTodos] = useState<Array<ITodoItem>>([]);
  const [mode, setMode] = useState<VisibilityMode>('all');
  const todoIDRef = useRef<number>(1);

  const [isTodosOpened, setIsTodosOpened] = useState<boolean>(false);

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: todoIDRef.current, title: inputValue, status: 'active' } as ITodoItem
      ])
      setInputValue("");
      todoIDRef.current += 1;
    }
  };

  const changeTodoStatus = (id: number) => {
    setTodos((prevTodos) => (
      prevTodos.map((todo) => (
        todo.id === id ? 
          { ...todo, status: todo.status === 'active' ? 'completed' : 'active' } as ITodoItem :
          todo
      ))
    ))
  }

  const [inputValue, setInputValue] = useState('');
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }
  const onInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') {
      addTodo()
    }
  }
  const onInputFocus = () => {
    setIsTodosOpened(true);
  }

  const todosToShow = mode === 'all' ?
    todos :
    todos.filter((todo) => todo.status === mode);

  const activeTodosCount = todos.filter((todo) => todo.status === 'active').length
    
  return (
    <div className='wrap'>
      <div className='wrap__input'>
        <input
          placeholder='Что нужно сделать?...'
          className='input'
          value={inputValue}
          onKeyDown={onInputKeyDown}
          onChange={onInputChange}
          onFocus={onInputFocus}
        />

        <button
          className='wrap__input-button'
          onClick={() => setIsTodosOpened(prev => !prev)}
        >
          <ChevronRight 
            className={`wrap__input-arrow${isTodosOpened ? ' wrap__input-arrow_opened' : ''}`}
          />
        </button>
      </div>

      <ul className={`todos${isTodosOpened ? ' todos_opened' : ''}`}>
        {
          todosToShow.map((todo) => (
            <TodoItem
              todo={todo}
              key={todo.id}
              changeTodoStatus={changeTodoStatus}
            />
          ))
        }
      </ul>

      <TodoBar 
        setMode={setMode}
        setTodos={setTodos}
        mode={mode}
        activeCount={activeTodosCount}
      />
    </div>
  )
}
export default Todo
