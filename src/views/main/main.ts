import m from 'mithril';
import { PageTitle } from '../ui/titles/page-title/page-title';
import { ParagraphTitle } from '../ui/titles/paragraph-title/paragraph-title';

import { pageTitles, paragraphTitles } from '../../shared/constants/titles';

import './main.css';

export const Main = {
  view: () =>
    m('main.main',
      m('section.section', [
        m(PageTitle, { text: pageTitles.introduction }),
    ]),
  ),
};
