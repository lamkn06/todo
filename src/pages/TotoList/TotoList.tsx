import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Input } from '../../components/Input/Input';
import { Items } from '../../components/Items/Items';
import { FILTER, Todo } from '../../models/todo';
import sc from './TodoList.styled';


const stateTodos: Todo[] = [
  {
    id: uuidv4(),
    name: 'task 01',
    isComplete: false,
  },
  {
    id: uuidv4(),
    name: 'task 02',
    isComplete: true,
  },
  {
    id: uuidv4(),
    name: 'task 03',
    isComplete: false,
  },
]

const TotoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newValue, setNewValue] = useState<string>('');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  useEffect(() => {
    setTodos(stateTodos);
  }, []);

  
  useEffect(() => {
    if (filterStatus === FILTER.ALL) {
      setTodos(stateTodos);  
      
    }
    if (filterStatus === FILTER.ACTIVE) {
      setTodos(stateTodos.filter(todo => !todo.isComplete));  
    }
    if (filterStatus === FILTER.COMPLETED) {
      setTodos(stateTodos.filter(todo => !!todo.isComplete));  
    }
    
  }, [filterStatus]);

  const handleFilterStatus = (status: string) => {
    setFilterStatus(status);
  };

  const handleChange = event => {
    setNewValue(event.target.value);
  };

  const handleAdd = event => {
    event.preventDefault();

    if (!newValue) {
      return;
    }

    stateTodos.push({
      id: uuidv4(),
      name: newValue,
      isComplete: false,
    }),
    setTodos(stateTodos);
    setNewValue('');
  };

  const handleToggle = (id: string) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }

      return todo;
    });

    setTodos(newTodos);
  };

  const handleDelete = (id: string) => {
    const newTodos = todos.filter(todo => todo.id !== id);

    setTodos(newTodos);
  };

  return (
    <sc.Container>
      <sc.Header>{new Date().toDateString()}</sc.Header>
      <sc.Tools>
        <sc.Count>{todos.length} tasks</sc.Count>
        <div>
          <sc.Filter onClick={() => handleFilterStatus(FILTER.ALL)} active={filterStatus === FILTER.ALL}>All</sc.Filter>
          <sc.Filter onClick={() => handleFilterStatus(FILTER.ACTIVE)} active={filterStatus === FILTER.ACTIVE}>Active</sc.Filter>
          <sc.Filter onClick={() => handleFilterStatus(FILTER.COMPLETED)} active={filterStatus === FILTER.COMPLETED}>Completed</sc.Filter>
        </div>
      </sc.Tools>
      <form onSubmit={handleAdd}>
        <Input
          placeholder="Add a new task..."
          value={newValue}
          onChange={handleChange}
        />
        <sc.Button wfd-invisible="true">Add Task</sc.Button>
      </form>

      <Items todos={todos} onDelete={handleDelete} onToggle={handleToggle} />
    </sc.Container>
  );
};

export default TotoList;
