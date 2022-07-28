import m from 'mithril';
import { SoCs } from '../../ui/socs/socs';
import { socs, socsContent } from '../../../shared/constants/supported-hardware/socs';
import { Letters } from '../../ui/letters/letters';

import './supported-hardware.css';

const getFirstLetters = () => {
  const lets = socs.reduce((letters, word, i, init) => {
    if (!letters.includes(word.slice(0, 1).toUpperCase()))
      letters.push(word.slice(0, 1).toUpperCase());
    return letters;
  }, [])
  return lets;
}

const getChoosenSoC = () => {
  let choosenSoC = m.route.param('choosenSoC');
  choosenSoC = (!choosenSoC || choosenSoC === 'full-list')
    ? 'Full list'
    : socs.find((soc: String) => soc.replace(' ','-').toLowerCase() === choosenSoC);
    return choosenSoC;
}

export const SupportedHardware = {
  view: () => {
    const choosenSoC = getChoosenSoC();
    const letters = getFirstLetters();
    return m('.sup-hd-wrapper', [
      m(Letters, { letters } ),
      m(SoCs, { socs: ['Full list', ...socs], choosenSoC }),
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
    ]);
  },
};
