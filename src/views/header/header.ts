import m from 'mithril';
import Button from '../ui/button/button';
import DropDown from './dropdown/dropdown';
import HeaderLink from '../ui/header-link/header-link';

import navigation from '../../shared/constants/main-nav-list';
import './header.css';

const Header = {
  clicked: 'About',
  view: () =>
    m( 'header', { class: 'header' },
      m('nav', { class: 'header__navigation' }, [
        m('div', { class: 'header__home'} ),
        m('ul', { class: 'header__routes' }, [
          navigation.map((el: {}) => {
            const isNestedElement = typeof el[Object.keys(el)[0]] !== 'string';
            const elementName = Object.keys(el)[0];
            return !isNestedElement
              ? m('li', { class: 'header__route' },
                  m(HeaderLink, { label: elementName, href: el[elementName] })
                 )
              : m('li', { class: 'header__route header__route_nested' }, [
                  m(
                    Button,
                    {
                      label: elementName,
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
