import m from 'mithril';

import './paragraph-title.css';

export const ParagraphTitle = {
  view: ({ attrs: { title }}) =>
    m('h2.paragraph-title', title),
};
