import m from 'mithril';

import './dropdown.css';

interface IAttrs {
  lables: string[]
  isOpen: boolean
}

const DropDown = {
  view: ({ attrs }) =>
    m(
      'ul',
      { class: `dropdown ${attrs.isOpen ? 'dropdown_show' : 'dropdown_hide'}` },
      attrs.lables.map((label: string) => m(
        'li',
        { class: 'dropdown__item' },
        m('a',
          {
            href: '#',
            class: 'dropdown__link',
          },
            label
         )
      ))
    ),
};

export default DropDown;
