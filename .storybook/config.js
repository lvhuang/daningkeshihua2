import { configure, addParameters } from '@storybook/vue';
import { themes } from '@storybook/theming';

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

addParameters({
  options: {
    theme: themes.dark
  }
})
configure(loadStories, module);
