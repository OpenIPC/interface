import m from 'mithril';
import { Vendors } from '../../ui/vendors/vendors';
import { vendors } from '../../../shared/constants/supported-hardware/vendors';
import { socs } from '../../../shared/constants/supported-hardware/socs';
import { Letters } from '../../ui/letters/letters';

import './supported-hardware.css';

const getFirstLettersOfVendors = (vendors: string[]): string[]  => {
  return vendors.reduce((letters: string[], word: string) => {
    if (!letters.includes(word.slice(0, 1).toUpperCase()))
      letters.push(word.slice(0, 1).toUpperCase());
    return letters;
  }, []);
}

const getLetterProvidedByPath = (vendors: string[]): string => {
  const letter: string = m.route.param('choosenLetter');
  return getFirstLettersOfVendors(vendors).includes(letter)
    ? letter
    : undefined;
};

const getVendorProvidedByPath = (vendors: string[]): string => {
  let choosenVendor: string = m.route.param('choosenVendor');
  return (!choosenVendor || choosenVendor === 'full-list')
    ? 'Full list'
    : vendors.find((vendor: string) => vendor.replace(' ','-').toLowerCase() === choosenVendor);
}

const getVendorsByChoosenLetter = (choosenLetter: string, vendors: string[]): string[] => {
  return choosenLetter
    ? vendors.filter((vendor: String) => vendor.slice(0,1).toUpperCase() === choosenLetter)
    : vendors;
}

const getSocsFullList = (socsByVendors: Object): Object => {
  const socs: [][] = Object.values(socsByVendors);
  const fullList: Object = socs.reduce((accumulator: {}, item: []) => {
    if (item) item.forEach((el: Object) => accumulator['Full list'].push(el));
    return accumulator;
  }, {'Full list': []});
  return fullList;
}

const getSocsByLetter = (choosenLetter: string, vendors: string[], socs: {}): {} => {
  const vendorsStartsWithChoosenLetter: String[] = vendors.filter((vendor: String) => {
    return vendor.slice(0,1).toUpperCase() === choosenLetter;
  });
  const socsByLetter: Object = {};
  vendorsStartsWithChoosenLetter.forEach((vendor: string) => socsByLetter[vendor] = socs[vendor]);
  return socsByLetter;
}
  
export const SupportedHardware = {
  view: () => {
    const letters: string[] = getFirstLettersOfVendors(vendors);
    const letter: string = getLetterProvidedByPath(vendors);
    const vendor: string = getVendorProvidedByPath(vendors);
    const vendorsToShow: string[] = getVendorsByChoosenLetter(letter, vendors);
    const socsFullList: Object = getSocsFullList(
      letter ? getSocsByLetter(letter, vendors, socs) : socs 
    );

    return m('.sup-hd-wrapper', [
      m(Letters, { letters, selectedLetter: letter } ),
      m(Vendors, {
        letter,
        vendors: ['Full list', ...vendorsToShow],
        selectedVendor: vendor,
      }),
      m('section.socs-section', [
        m('h2', `SoC: filtered by ${vendor}`), 
        m('ul',
          { 'Full list': socsFullList['Full list'], ...socs }[vendor].map((soc: {}) =>
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
