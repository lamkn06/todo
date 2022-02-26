import { Item } from '../../components/Item/Item';
import { Todo } from '../../models/todo';
import sc from './Items.styled';

interface Props {
  todos: Todo[];

  onToggle(id: string): void;
  onDelete(id: string): void;
}

export const Items = (props: Props) => {
  return (
    <sc.Container>
      {props.todos.length === 0 ? (
        <sc.Empty>Not found a task</sc.Empty>
      ) : (
        props.todos.map(todo => (
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
