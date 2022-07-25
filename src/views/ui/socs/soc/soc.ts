import m from 'mithril';

import './soc.css';

export const SoC = {
  view: ({ attrs: { soc }}) =>
    m('li.soc',
      m('a.soc-link', { href: `/${soc}` }, soc)
    ),
};
