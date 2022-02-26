import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex: 1;

  align-items: center;
  justify-content: center;
`;

const ContainerStorybook = (props: React.Props<any>) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default ContainerStorybook;
