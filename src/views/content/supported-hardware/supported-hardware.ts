import m from 'mithril';
import { SoCs } from '../../ui/socs/socs';
import { socs, socsContent } from '../../../shared/constants/supported-hardware/socs';
import { Letters } from '../../ui/letters/letters';

import './supported-hardware.css';

const getFirstLetters = () => {
  const lets = socs.reduce((letters: String[], word: String) => {
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

const getChoosenLetter = () => {
  let choosenLetter = m.route.param('choosenLetter');
  return getFirstLetters().includes(choosenLetter)
    ? choosenLetter
    : undefined;
};

const getChoosenLetterSoCs = (choosenLetter: String) => {
  return choosenLetter
    ? socs.filter((el) => el.slice(0,1).toUpperCase() === choosenLetter)
    : socs;
}

const getFullList = (content: {}) => {
  console.log(content);
  const socsContentValues = Object.values(content);
  const fullList = socsContentValues.reduce((list: Object, item: []) => {
    if (item) item.forEach((el) => list['Full list'].push(el));
    return list;
  }, {'Full list': []});
  return fullList;
}

const getChoosenLetterSoCsContent = (choosenLetter: String) => {
  const choosenLetterSoCs = socs.filter((el) => el.slice(0,1).toUpperCase() === choosenLetter);
  const choosenLetterSoCsContent = {};
  choosenLetterSoCs.forEach((el) => choosenLetterSoCsContent[el] = socsContent[el]);
  return choosenLetterSoCsContent;
}
  
export const SupportedHardware = {
  view: () => {
    const letters = getFirstLetters();
    const choosenLetter = getChoosenLetter();
    const choosenSoC = getChoosenSoC();
    const fullList = getFullList(
      choosenLetter ? getChoosenLetterSoCsContent(choosenLetter) : socsContent
    );

    return m('.sup-hd-wrapper', [
      m(Letters, { letters, choosenLetter } ),
      m(SoCs, {
        letter: choosenLetter,
        socs: ['Full list', ...getChoosenLetterSoCs(choosenLetter)],
        choosenSoC
      }),
      m('section.socs-section', [
        m('h2', `SoC: filtered by ${choosenSoC}`), 
        m('ul',
          { 'Full list': fullList['Full list'], ...socsContent }[choosenSoC].map((soc) =>
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
