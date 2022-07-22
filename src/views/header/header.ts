import m from 'mithril';
import { HeaderButton } from '../ui/buttons/header-button/header-button';
import { BurgerButton } from '../ui/buttons/burger-button/burger-button';
import { MobileRoutes } from './mobile-routes/mobile-routes';
import DropDown from './dropdown/dropdown';
import { HeaderLink } from '../ui/links/header-link/header-link';

import navigation from '../../shared/constants/main-nav-list';
import './header.css';
import logo from '../../shared/images/logo.svg';

const Header = {
  clicked: undefined,
  toggleMobileRoutes: () => Header.isMobileRoutesOpen = !Header.isMobileRoutesOpen,
  isMobileRoutesOpen: false,
  clickHandler: (e) => Header.clicked === e.target.name
    ? Header.clicked = 'undefined'
    : Header.clicked = e.target.name,
  view: () =>
    m('header.header', [
      m('nav.header__navigation', [
        m('div.header__home',
          m.trust(logo),
         ),
        m('ul.header__routes.header__routes_desktop', [
          navigation.map((el: {}) => {
            const isNestedElement = typeof el[Object.keys(el)[0]] !== 'string';
            const elementName = Object.keys(el)[0];
            return !isNestedElement
              ? m('li.header__route',
                  m(HeaderLink, { label: elementName, href: el[elementName] })
                 )
              : m('li.header__route.header__route_nested', [
                  m(HeaderButton, { label: elementName, clickHandler: Header.clickHandler }),
                  m(DropDown, { nestedElems: el[elementName], isOpen: elementName === Header.clicked }),
                ])
          })
        ]),
        m('.header__routes.header__routes_burger',
          m(BurgerButton, { clickHandler: Header.toggleMobileRoutes })
         ),
      ]),
      m(MobileRoutes, { navElements: navigation, isOpen: Header.isMobileRoutesOpen }),
    ]),
};

export default Header;
