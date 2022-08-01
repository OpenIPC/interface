import m from 'mithril';
import { Vendors } from '../../ui/vendors/vendors';
import { vendors } from '../../../shared/constants/supported-hardware/vendors';
import { socs } from '../../../shared/constants/supported-hardware/socs';
import { Letters } from '../../ui/letters/letters';
import { Socs } from '../../ui/socs/socs';
import { SocsMobile } from '../../ui/socs-mobile/socs-mobile';

import './supported-hardware.css';

export interface SoC {
    stage: string,
    socModel: string,
    docs: string,
    uBoot: string,
    linux: string,
    sdk: string,
    loadAddress: string,
    buildStatus: string,
}

export interface SoCs {
  [key: string]: SoC[]
}

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
  const socs = Object.values(socsByVendors);
  const fullList = socs.reduce((accumulator: {}, item: []) => {
    if (item) item.forEach((el: Object) => accumulator['Full list'].push(el));
    return accumulator;
  }, {'Full list': []});
  return fullList;
}

const getSocsByLetter = (choosenLetter: string, vendors: string[], socs: SoCs): {} => {
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
    const socsByLetter: {} = getSocsByLetter(letter, vendors, socs);
    const socsFullList: Object = getSocsFullList(
      letter ? socsByLetter : socs 
    );

    return m('.sup-hd-wrapper',
      m(Letters, { letters, selectedLetter: letter } ),
      m(Vendors, {
        letter,
        vendors: ['Full list', ...vendorsToShow],
        selectedVendor: vendor,
      }),
      m('section.socs-section',
        m('h2.socs-section__header', vendor === 'Full list' ? 'SoC: full list' : `SoC: filtered by ${vendor}`),
        m(Socs, {
          socs: { 'Full list': socsFullList['Full list'], ...socsByLetter}[vendor],
        }),
        m(SocsMobile, {
          socs: { 'Full list': socsFullList['Full list'], ...socsByLetter}[vendor],
        }),
      ),
    );
  },
};
