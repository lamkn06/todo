import { Item } from '../../components/Item/Item';
import { Todo } from '../../models/todo';
import sc from './Items.styled';

interface Props {
  todos: Todo[];
  filterStatus: string;

  onToggle(id: string): void;
  onDelete(id: string): void;
}

export const Items = (props: Props) => {
  const todos = props.todos.filter(todo => {
    if (props.filterStatus === 'all') {
      return todo;
    }
    if (props.filterStatus === 'active') {
      return !todo.isComplete;
    }
    if (props.filterStatus === 'completed') {
      return !!todo.isComplete;
    }

    return true;
  });

  return (
    <sc.Container>
      {todos.length === 0 ? (
        <sc.Empty>Not found a task</sc.Empty>
      ) : (
        todos.map(todo => (
          <Item
            key={todo.id}
            checked={todo.isComplete}
            label={todo.name}
            id={todo.id}
            onToggle={props.onToggle}
            onDelete={props.onDelete}
          />
        ))
      )}
    </sc.Container>
  );
};
