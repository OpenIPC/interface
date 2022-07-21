import m from 'mithril';

import './page-title.css';

interface attrs {
  text: string
}

export const PageTitle = {
  view: ({ attrs: { text }}) => m('h1.page-title', text),
};
