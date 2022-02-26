import sc from './Input.styled';

interface Props {
  value: string
  placeholder?: string
  
  onChange(event): void
}

export const Input = (props: Props) => {
  return <sc.Container placeholder={props.placeholder} type={'text'} value={props.value}onChange={props.onChange}/>;
};
