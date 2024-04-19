import React from 'react';
import NavigationComponent from './Navigation';

// Default export with title
export default {
  title: 'Navigation/Navigation',
  component: NavigationComponent,
  argTypes: {
    heading: { control: 'text' },
    bodyText: { control: 'text' },
    buttonText: { control: 'text' },
  },
};

// Named export for each story
export const Navigation = (args) => <NavigationComponent {...args} />;

// Default values for props
Navigation.args = {
  heading: 'Navigation Component',
  bodyText:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  buttonText: 'Click Me!',
};
