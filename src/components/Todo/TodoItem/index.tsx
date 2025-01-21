import { CheckboxChecked, CheckboxUnchecked } from "../../../icons";

import type { ITodoItem } from "../model";

import './TodoItem.css';

interface ITodoItemProps {
  todo: ITodoItem
  changeTodoStatus: (id: number) => void;
}

const TodoItem = ({
  todo,
  changeTodoStatus
}: ITodoItemProps) => {
  return (
    <li 
      onClick={() => changeTodoStatus(todo.id)}
      className={`todos__item${todo.status === 'completed' ? ' todos__item_completed' : ''}`}
    >
      {
        todo.status === 'active' ? 
        (
          <CheckboxUnchecked
            color='#a4a4a7'
            className='todos__item-checkbox'
          />
        ) : 
        (
          <CheckboxChecked
            color='#679CFF'
            className='todos__item-checkbox'
          />
        )
      }
      {todo.title}
    </li>
  )
}
export default TodoItem
