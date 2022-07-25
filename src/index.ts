import m from 'mithril';
import { Layout } from './views/layout/layout';
import { Introduction } from './views/content/introduction/introduction';
import { SupportedHardware } from './views/content/supported-hardware/supported-hardware';

import './shared/styles/global.css';
import './shared/styles/palette.css';
import './shared/styles/fonts.css';

m.route.prefix = '';

m.route(document.body, '/introduction', {
  '/introduction':  {
    view: () => m(Layout, { pageTitle: 'introduction' }, m(Introduction, { pageTitle: 'introduction' })),
  },
  '/supported-hardware':  {
    view: () => m(Layout, { pageTitle: 'supported-hardware' }, m(SupportedHardware, { pageTitle: 'supported-hardware' })),
  },
});
