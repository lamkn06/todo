import { Input } from '../../components/Input/Input';
import { Todo } from '../../models/todo';
import sc from './TodoList.styled';
import { v4 as uuidv4 } from 'uuid';
import { Item } from '../../components/Item/Item';
import { useState } from 'react';
import { useEffect } from 'react';


const TotoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newValue, setNewValue] = useState<string>('');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  useEffect(() => {
    setTodos([
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
    ]);
  }, []);

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

    setTodos(
      todos.concat({
        id: uuidv4(),
        name: newValue,
        isComplete: false,
      }),
    );

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
          <sc.Filter onClick={() => handleFilterStatus('all')} active={filterStatus === 'all'}>All</sc.Filter>
          <sc.Filter onClick={() => handleFilterStatus('active')} active={filterStatus === 'active'}>Active</sc.Filter>
          <sc.Filter onClick={() => handleFilterStatus('completed')} active={filterStatus === 'completed'}>Completed</sc.Filter>
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

      {todos.filter(todo => {
        if (filterStatus === 'all') {
          return todo
        }
        if (filterStatus === 'active') {
          return !todo.isComplete
        }
        if (filterStatus === 'completed') {
          return  !!todo.isComplete
        }

        return true
      }).map(todo => (
        <Item
          key={todo.id}
          checked={todo.isComplete}
          label={todo.name}
          id={todo.id}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      ))}
    </sc.Container>
  );
};

export default TotoList;
