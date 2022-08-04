import m from 'mithril';
import './mobile-dropdown.css';

export const MobileDropdown = {
  view: ({ attrs: { navElements, isOpen }}) =>
    m('ul.mobile-dropdown', {
      class: isOpen ? 'mobile-dropdown_open' : 'mobile-dropdown_close',
    },
      navElements.map((el: {}[]) =>
        m('li.mobile-dropdown__item',
          m(`a.mobile-dropdown__link[href=${el[Object.keys(el)[0]]}]`,
            Object.keys(el)[0]
          )
        ),
      )
    )
};
