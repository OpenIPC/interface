import m from 'mithril';
import Button from '../ui/button/button';
import DropDown from './dropdown/dropdown';

import navigation from '../../shared/constants/main-nav-list';
import './header.css';

const Header = {
  clicked: 'Tools',
  view: () =>
    m( 'header', { class: 'header' },
      m('nav', { class: 'header__navigation' }, [
        m('div', { class: 'header__home'} ),
        m('ul', { class: 'header__routes' }, [
          navigation.map((el: string | {}) => {
            const isNestedElement = typeof el !== 'string';
            const nestedElementName = isNestedElement ? Object.keys(el)[0] : undefined;
            return !isNestedElement
              ? m('li', { class: 'header__route' },
                  m(Button, { label: el, nested: false })
                 )
              : m('li', { class: 'header__route header__route_nested' }, [
                  m(
                    Button,
                    {
                      label: nestedElementName,
                      nested: true
                    },
                  ),
                  m(
                    DropDown,
                    {
                      lables: el[nestedElementName],
                      isOpen: nestedElementName === Header.clicked,
                    },
                  ),
                ])
          })
        ]),
      ]),
    ),
};

export default Header;
