import m from 'mithril';

import './soc.css';

export const SoC = {
  view: ({ attrs: { soc, isChoosen }}) =>
    m('li.socs__soc',
      m(m.route.Link, {
        class: `socs__link ${isChoosen ? 'socs__link_choosen' : ''}`, 
        href: `/cameras/vendors/${soc.replace(' ', '-').toLowerCase()}`
      },
      soc)
    ),
};
