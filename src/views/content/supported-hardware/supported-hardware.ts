import m from 'mithril';
import { SoCs } from '../../ui/socs/socs';
import { socs, socsContent } from '../../../shared/constants/supported-hardware/socs';

import './supported-hardware.css';

export const SupportedHardware = {
  view: () => {
    let choosenSoC = m.route.param('choosenSoC');
    choosenSoC = choosenSoC
      ? socs.find((soc: String) => soc.replace(' ','-').toLowerCase() === choosenSoC)
      : socs[0];
    return m('.sup-hd-wrapper',
      m(SoCs, { socs, choosenSoC }),
      m('section.socs-section', [
        m('h2', `SoC: filtered by ${choosenSoC}`), 
        m('ul',
          socsContent[choosenSoC].map((soc) =>
            m('li',
              m('ul',
                Object.keys(soc).map((val) =>
                  m('li', soc[val])),
               ),
             )),
         ),
      ]),
    );
  },
};
