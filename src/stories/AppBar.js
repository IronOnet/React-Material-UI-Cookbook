import React from 'react';

import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { withKnobs, text } from '@storybook/addon-knobs';

import {
  HideOnScroll,
  FixedPosition,
  ToolbarAbstraction,
  WithNavigation
} from '../AppBar';

storiesOf('App Bar', module)
  .addDecorator(withKnobs)
  .addDecorator(StoryRouter())
  .add('Hide On Scroll', () => <HideOnScroll />)
  .add('Fixed Position', () => <FixedPosition />)
  .add('Toolbar Abstraction', () => (
    <ToolbarAbstraction title={text('Title', 'My Toolbar')} />
  ))
  .add('With Navigation', () => (
    <WithNavigation title={text('Title', 'With Navigation')} />
  ));
