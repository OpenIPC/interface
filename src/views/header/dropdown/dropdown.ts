import m from 'mithril';

import './dropdown.css';

interface IAttrs {
  nestedElems: {}[]
  isOpen: boolean
}

const DropDown = {
  view: ({ attrs }) =>
    m(
      'ul',
      { class: `dropdown ${attrs.isOpen ? 'dropdown_show' : 'dropdown_hide'}` },
      attrs.nestedElems.map((el: {}) => {
        const elementName = Object.keys(el)[0];
        return m(
          'li',
          { class: 'dropdown__item' },
          m('a',
            {
              href: el[elementName],
              class: 'dropdown__link',
            },
            elementName,
          )
        );
      })
    ),
};

export default DropDown;
