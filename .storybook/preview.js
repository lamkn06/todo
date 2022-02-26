import ContainerStorybook from './Container';

const withThemeProvider = (Story, context) => {
  return (
    <ContainerStorybook>
      <Story {...context} />
    </ContainerStorybook>
  );
};

export const decorators = [withThemeProvider];
