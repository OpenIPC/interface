import m from 'mithril';
import Button from '../ui/button/button';
import DropDown from './dropdown/dropdown';
import HeaderLink from '../ui/header-link/header-link';

import navigation from '../../shared/constants/main-nav-list';
import './header.css';

const Header = {
  clicked: undefined,
  clickHandler: (e) => Header.clicked === e.target.name ? Header.clicked = 'undefined' : Header.clicked = e.target.name,
  view: () =>
    m('header.header',
      m('nav.header__navigation', [
        m('div.header__home'),
        m('ul.header__routes', [
          navigation.map((el: {}) => {
            const isNestedElement = typeof el[Object.keys(el)[0]] !== 'string';
            const elementName = Object.keys(el)[0];
            return !isNestedElement
              ? m('li.header__route',
                  m(HeaderLink, { label: elementName, href: el[elementName] })
                 )
              : m('li.header__route.header__route_nested', [
                  m(
                    Button,
                    {
                      label: elementName,
                      clicker: Header.clickHandler,
                    },
                  ),
                  m(
                    DropDown,
                    {
                      nestedElems: el[elementName],
                      isOpen: elementName === Header.clicked,
                    },
                  ),
                ])
          })
        ]),
      ]),
    ),
};

export default Header;
