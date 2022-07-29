import m from 'mithril';
import { SoC } from './soc/soc';

import './socs.css';

export const SoCs = {
  view: ({ attrs: { socs, letter, choosenSoC }}) =>
  m('nav.socs',
    m('ul.socs__list',
      socs.map((soc: String) =>
        m(SoC, {
          letter,
          soc,
          isChoosen: soc === choosenSoC,
      }))
     ),
  ),
};
