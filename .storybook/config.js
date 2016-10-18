import { configure } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';

import '../components/Swipe/swipe.scss'
import '../components/Story/story.scss'
import './custom.scss'

setOptions({
  name: 'REACT-PHOTOSTORY',
  url: 'https://github.com/housinghq/react-photostory',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: false,
});

function loadStories () {
  require('../stories/Swipe.story.js');
}

configure(loadStories, module);
