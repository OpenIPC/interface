import m from 'mithril';
import { Layout } from './views/layout/layout';
import { Introduction } from './views/content/introduction/introduction';
import { SupportedHardware } from './views/content/supported-hardware/supported-hardware';
import { SupportOpenSource } from './views/content/support-open-source/support-open-source';

import './shared/styles/global.css';
import './shared/styles/palette.css';
import './shared/styles/fonts.css';

m.route.prefix = '';

m.route(document.body, '/', {
  '/':  {
    render: () =>
      m(Layout, {
        pageTitle: 'introduction',
      }, m(
        Introduction, {
          pageTitle: 'introduction'
        })
      ),
  },
  '/introduction':  {
    render: () =>
      m(Layout, {
        pageTitle: 'introduction'
      }, m(
        Introduction, {
          pageTitle: 'introduction',
        })
      ),
  },
  '/supported-hardware':  {
    render: () =>
      m(Layout, {
        pageTitle: 'supported-hardware',
      }, m(
          SupportedHardware, {
            pageTitle: 'supported-hardware',
        })
      ),
  },
  '/support-open-source':  {
    render: () =>
      m(Layout, {
        pageTitle: 'support-open-source',
      }, m(
          SupportOpenSource, {
            pageTitle: 'support-open-source',
        })
      ),
  },
  '/cameras/vendors/:choosenLetter': {
    render: () =>
      m(Layout, {
        pageTitle: 'supported-hardware',
      }, m(
          SupportedHardware, {
            pageTitle: 'supported-hardware',
          })
      ),
  },
  '/cameras/vendors/:choosenLetter/:choosenVendor': {
    render: () =>
      m(Layout, {
        pageTitle: 'supported-hardware',
      }, m(
          SupportedHardware, {
            pageTitle: 'supported-hardware',
          })
      ),
  },
});
