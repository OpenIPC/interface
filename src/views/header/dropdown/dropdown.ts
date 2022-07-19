import m from 'mithril';

import './dropdown.css';

interface IAttrs {
  nestedElems: {}[]
  isOpen: boolean
}

const DropDown = {
  view: ({ attrs }) =>
    m(
      'ul.dropdown', {
        class: attrs.isOpen ? 'dropdown_show' : 'dropdown_hide',
      },
      attrs.nestedElems.map((el: {}) => {
        const elementName = Object.keys(el)[0];
        return m(
          'li.dropdown__item',
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

export default DropDown;
