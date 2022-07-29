import m from 'mithril';
import { Vendor } from './vendor/vendor';

import './vendors.css';

export const Vendors = {
  view: ({ attrs: { letter, vendors, selectedVendor }}) =>
  m('nav.vendors',
    m('ul.vendors__list',
      vendors.map((vendor: string) =>
        m(Vendor, {
          letter,
          vendor,
          isChoosen: vendor === selectedVendor,
      }))
     ),
  ),
};
