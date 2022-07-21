import m from 'mithril';

import './paragraph-title.css';

export const ParagraphTitle = {
  view: ({ attrs: { text }}) =>
    m('h2.paragraph-title', text),
};
