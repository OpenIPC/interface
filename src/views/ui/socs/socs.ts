import m from 'mithril';
import { SoC } from './soc/soc';

import socs from '../../../shared/constants/supported-hardware/socs';

import './socs.css';

export const SoCs = {
  view: () =>
    m('ul.socs',
      socs.map((soc) => m(SoC, { soc }))
     ),
};
