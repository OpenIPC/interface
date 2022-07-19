import m from 'mithril';

import './header-link.css';

interface IHeaderLink {
  label: string
  href: string
}

const HeaderLink = {
  view: ({ attrs }) =>
    m(
      'a',
      {
        class: 'header-link',
        href: attrs.href,
      },
      attrs.label,
    ),
};

export default HeaderLink;
