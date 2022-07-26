import m from 'mithril';
import { HeaderButton } from '../../../ui/buttons/header-button/header-button';
import { MobileDropdown } from '../mobile-dropdown/mobile-dropdown';
import { HeaderLink } from '../../../ui/links/header-link/header-link';

export const MobileRoutes = {
  openedDropdowns: [],
  toggleDropdown: (e: any) => {
    if (MobileRoutes.openedDropdowns.includes(e.target.name))
      MobileRoutes.openedDropdowns = MobileRoutes.openedDropdowns.filter((elName: string) =>
        elName !== e.target.name);
    else 
      MobileRoutes.openedDropdowns.push(e.target.name);
  },
  view: ({ attrs: { navElements, isOpen }}) => {
    if (!isOpen) MobileRoutes.openedDropdowns = [];
    return m('ul.header__routes.header__routes_mobile',
        { class: isOpen ? 'header__routes_mobile_open' : 'header__routes_mobile_close' },
        navElements.map((el: {}) => {
          const isNestedElement = typeof el[Object.keys(el)[0]] !== 'string';
          const elementName = Object.keys(el)[0];
          return !isNestedElement
            ? m('li.header__route',
                m(HeaderLink, { label: elementName, href: el[elementName] })
               )
            : m('li.header__route.header__route_nested', [
              m(HeaderButton, {
                label: elementName,
                clickHandler: MobileRoutes.toggleDropdown
              }),
              m(MobileDropdown, {
                navElements: el[elementName],
                isOpen: MobileRoutes.openedDropdowns.includes(elementName)
              }),
            ])
        })
    );
  },
};
