import { MemoryRouter } from 'react-router-dom';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { Item } from '../Item';
import { action } from '@storybook/addon-actions';

const Container = styled.div`
  width: 1600px;
  max-height: 116px;
`;

const Story = () => (
  <MemoryRouter>
    <Container className="visual-reg">
      <Item
        label="New Task"
        id={'1'}
        onToggle={(id: string) => action('onToggle')(id)}
        onDelete={(id: string) => action('onDelete')(id)}
        checked={false}
      />
      <Item
        label="New Task"
        id={'1'}
        onToggle={(id: string) => action('onToggle')(id)}
        onDelete={(id: string) => action('onDelete')(id)}
        checked={true}
      />
    </Container>
  </MemoryRouter>
);

storiesOf('Item', module).add('default', () => <Story />);
