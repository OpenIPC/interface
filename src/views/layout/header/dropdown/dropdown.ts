import m from 'mithril';

import './dropdown.css';

interface IAttrs {
  nestedElems: {}[]
  isOpen: boolean
}

export const DropDown = {
  view: ({ attrs: { isOpen, nestedElems }}) =>
    m( 'ul.dropdown', {
        class: isOpen ? 'dropdown_show' : 'dropdown_hide',
      },
      nestedElems.map((el: {}) => {
        const elementName = Object.keys(el)[0];
        return m( 'li.dropdown__item',
          m('a.dropdown__link',
            {
              href: el[elementName],
            },
            elementName,
          )
        );
      })
    ),
};
