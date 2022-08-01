import m from 'mithril';
import { SocMobile } from './soc-mobile/soc-mobile';

import { SoC } from '../../content/supported-hardware/supported-hardware';
import './socs-mobile.css';

export const SocsMobile = {
  view: ({ attrs: { socs }}) =>
    m('ul.socs-mobile',
      socs.map((soc: SoC) => m(SocMobile, { soc }))
    ),
}
