import { MemoryRouter } from 'react-router-dom';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import {Input}  from '../Input'


const Container = styled.div`
  width: 1600px;
  max-height: 116px;
`;

const Story = () => (
  <MemoryRouter>
  
      <Container className="visual-reg">
        <Input label={'Name'}/>
      </Container>
    
  </MemoryRouter>
);

storiesOf('Input', module).add('default', () => <Story  />);
