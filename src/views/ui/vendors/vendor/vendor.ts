import m from 'mithril';

import './vendor.css';

export const Vendor = {
  view: ({ attrs: { letter, vendor, isChoosen }}) =>
    m('li.vendors__vendor',
      m(m.route.Link, {
        class: `vendors__link ${isChoosen ? 'vendors__link_choosen' : ''}`, 
        href: vendor === 'Full list' && letter === undefined
          ? `/supported-hardware`
          : vendor === 'Full list'
            ? `/cameras/vendors/${letter}/${vendor.replace(' ', '-').toLowerCase()}`
            : `/cameras/vendors/${vendor.slice(0,1)}/${vendor.replace(' ', '-').toLowerCase()}`
      },
      vendor)
    ),
};
