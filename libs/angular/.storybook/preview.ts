import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
import { addParameters } from '@storybook/angular';
import theme from '../../../.storybook/defaultTheme';

setCompodocJson(docJson);
addParameters({ docs: 
  { 
    iframeHeight: 30,
  } 
});

import { configure, addDecorator } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withKnobs);
configure(require.context('../src/lib', true, /\.stories\.(j|t)sx?$/), module);

export const parameters = {
  docs: {
    theme,
  },
};
