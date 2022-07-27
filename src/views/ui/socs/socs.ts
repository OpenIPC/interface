import m from 'mithril';
import { SoC } from './soc/soc';

import './socs.css';

export const SoCs = {
  view: ({ attrs: { socs, choosenSoC }}) =>
  m('nav.socs',
    m('ul.socs__list',
      socs.map((soc: String, i: Number) =>
        m(SoC, {
          soc,
          isChoosen: soc === choosenSoC,
      }))
     ),
  ),
};
