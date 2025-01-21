import type { ITodoItem, VisibilityMode } from "../model";
import './TodoBar.css';

interface ITodoBar {
  activeCount: number;
  mode: VisibilityMode;
  setMode: React.Dispatch<React.SetStateAction<VisibilityMode>>;
  setTodos: React.Dispatch<React.SetStateAction<ITodoItem[]>>;
}

const TodoBar = ({ 
  activeCount,
  mode,
  setMode,
  setTodos
 }: ITodoBar) => {
  const countContentMap = {
    '1': 'Активная тудушка',
    '2-4': 'Активные тудушки',
    '5-': 'Активных тудушек'
  }

  const countContentKey = activeCount === 1 ?
    '1' :
    (activeCount > 1 && activeCount < 5) ? '2-4' :
    '5-'

  const countContent = `${activeCount} ${countContentMap[countContentKey]}`

  return (
    <div className="todobar">
        <span>
          {
            countContent
          }
        </span>

        <div className="todobar__buttons">
          <button
            className={`todobar__button${mode === 'all' ? ' todobar__button_active' : ''}`}
            onClick={() => setMode('all')}
          >
            Все
          </button>
          <button
            data-testid="#active-button"
            className={`todobar__button${mode === 'active' ? ' todobar__button_active' : ''}`}
            onClick={() => setMode('active')}
          >
            Активные
          </button>
          <button
            data-testid="#completed-button"
            className={`todobar__button${mode === 'completed' ? ' todobar__button_active' : ''}`}
            onClick={() => setMode('completed')}
          >
            Выполненные
          </button>
        </div>

        <button
          onClick={() => setTodos((prev) => prev.filter((todo) => todo.status !== 'completed'))}
        >
          Очистить выполненные
        </button>
      </div>
  )
}
export default TodoBar
