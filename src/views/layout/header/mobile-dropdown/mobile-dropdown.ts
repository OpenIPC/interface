import m from 'mithril';
import './mobile-dropdown.css';

export const MobileDropdown = {
  view: ({ attrs: { navElements, isOpen }}) =>
    m('ul.mobile-dropdown', {
      class: isOpen ? 'mobile-dropdown_open' : 'mobile-dropdown_close',
    },
      navElements.map((el: {}[]) =>
        m('li.mobile-dropdown__item', Object.keys(el)[0])
      )
    )
};
