import m from 'mithril';
import Button from '../ui/button/button';

import navigation from '../../shared/constants/main-nav-list';
import './header.css';

const Header = {
  clicked: 'About',
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
                  m(Button, { label: nestedElementName, nested: true }),
                  m('ul', { class: `header__dropdown ${nestedElementName === Header.clicked ? 'header__dropdown_show' : 'header__dropdown_hide'}` }, [
                    el[nestedElementName].map((el: string) => m('li', { class: 'header__dropdown-item' }, el))
                  ])
                ])
          })
        ]),
      ]),
    ),
};

export default Header;
