import sc from './Item.styled';

interface Props {
  id: string
  checked: boolean
  label: string

  onToggle(id: string): void
  onDelete(id: string): void
}

export const Item = (props: Props) => {
  return (
    <sc.Container checked={props.checked}>
      <sc.Status type='checkbox' checked={props.checked} id={props.id} onChange={() => props.onToggle(props.id)}/>
      <sc.Label htmlFor={props.id}>{props.label}</sc.Label>
      <sc.Delete onClick={() => props.onDelete(props.id)}/>
    </sc.Container>
  );
};
