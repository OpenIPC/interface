import m from 'mithril';
import { SocMobile } from './soc-mobile/soc-mobile';

import './socs-mobile.css';

export const SocsMobile = {
  view: ({ attrs: { socs }}) =>
    m('ul.socs-mobile',
      socs.map((soc: Object) => m(SocMobile, { soc }))
    ),
}
