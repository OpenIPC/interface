import m from 'mithril';

import './soc.css';

export const SoC = {
  view: ({ attrs: { soc }}) =>
    m('li.socs__soc',
      m(m.route.Link, { class: 'socs__link', href: `/cameras/vendors/${soc}` }, soc)
    ),
};
