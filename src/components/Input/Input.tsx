import sc from './Input.styled';

interface Props {
  label: string;
}

export const Input = (props: Props) => {
  return (
    <sc.Container>
      <sc.Input type="text" required />
      <sc.Highlight class="highlight"></sc.Highlight>
      <sc.Bar class="bar"></sc.Bar>
      <sc.Label>{props.label}</sc.Label>
    </sc.Container>
  );
};
