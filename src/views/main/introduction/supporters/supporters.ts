import m from 'mithril';
import { ParagraphTitle } from '../../../ui/titles/paragraph-title/paragraph-title';

import './supporters.css';

export const Supporters = {
  view: ({ attrs: { text }}) =>
    m('.supporters', [
      m(ParagraphTitle, { text: text }),
  ]),
};

