import m from 'mithril';
import { ParagraphTitle } from '../../../ui/titles/paragraph-title/paragraph-title';
import { SupportersList } from './supporters-list/supporters-list';

import './supporters.css';

export const Supporters = {
  view: ({ attrs: { title, supporters }}) =>
    m('.supporters', [
      m(ParagraphTitle, { title: title }),
      m(SupportersList, { supporters: supporters }),
  ]),
};

