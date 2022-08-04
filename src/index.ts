import m from 'mithril';
import { Layout } from './views/layout/layout';
import { Introduction } from './views/content/introduction/introduction';
import { SupportedHardware } from './views/content/supported-hardware/supported-hardware';
import { SupportOpenSource } from './views/content/support-open-source/support-open-source';
import { OurTeam } from './views/content/our-team/our-team';
import { OurProjects } from './views/content/our-projects/our-projects';

import './shared/styles/global.css';
import './shared/styles/palette.css';
import './shared/styles/fonts.css';

m.route.prefix = '';

m.route(document.body, '/', {
  '/':  {
    render: () =>
      m(Layout, {
        pageTitle: 'introduction',
      }, m(Introduction, {
          pageTitle: 'introduction'
        })
      ),
  },
  '/introduction':  {
    render: () =>
      m(Layout, {
        pageTitle: 'introduction'
      }, m(Introduction, {
          pageTitle: 'introduction',
        })
      ),
  },
  '/supported-hardware':  {
    render: () =>
      m(Layout, {
        pageTitle: 'supported-hardware',
      }, m(SupportedHardware, {
            pageTitle: 'supported-hardware',
        })
      ),
  },
  '/support-open-source':  {
    render: () =>
      m(Layout, {
        pageTitle: 'support-open-source',
      }, m(SupportOpenSource, {
            pageTitle: 'support-open-source',
        })
      ),
  },
  '/our-team': {
    render: () =>
      m(Layout, {
        pageTitle: 'our-team',
    }, m(OurTeam, {
          pageTitle: 'our-team',
        })
      ),
  },
  '/our-projects': {
    render: () =>
      m(Layout, {
        pageTitle: 'our-projects',
      }, m(OurProjects, {
        pageTitle: 'our-projects',
      }),
    ),
  },
  '/cameras/vendors/:choosenLetter': {
    render: () =>
      m(Layout, {
        pageTitle: 'supported-hardware',
      }, m(SupportedHardware, {
            pageTitle: 'supported-hardware',
          })
      ),
  },
  '/cameras/vendors/:choosenLetter/:choosenVendor': {
    render: () =>
      m(Layout, {
        pageTitle: 'supported-hardware',
      }, m(SupportedHardware, {
            pageTitle: 'supported-hardware',
          })
      ),
  },
});
