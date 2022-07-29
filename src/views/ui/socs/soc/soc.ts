import m from 'mithril';

import './soc.css';

export const SoC = {
  view: ({ attrs: { letter, soc, isChoosen }}) =>
    m('li.socs__soc',
      m(m.route.Link, {
        class: `socs__link ${isChoosen ? 'socs__link_choosen' : ''}`, 
        href: soc === 'Full list' && letter === undefined
          ? `/supported-hardware`
          : soc === 'Full list'
            ? `/cameras/vendors/${letter}/${soc.replace(' ', '-').toLowerCase()}`
            : `/cameras/vendors/${soc.slice(0,1)}/${soc.replace(' ', '-').toLowerCase()}`
      },
      soc)
    ),
};
