import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import TotoList from '../TotoList';


const Story = () => (
  <MemoryRouter>
    <TotoList />
  </MemoryRouter>
);

storiesOf('TotoList', module).add('default', () => <Story />);
