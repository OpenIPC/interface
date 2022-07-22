import m from 'mithril';
import { PageTitle } from '../ui/titles/page-title/page-title';
import { pageTitles, paragraphTitles } from '../../shared/constants/titles';
import { Introduction } from './introduction/introduction';

import './main.css';

export const Main = {
  view: () =>
    m('main.main',
      m('section.section', [
        m(PageTitle, { text: pageTitles.introduction }),
        m(Introduction, { titles: paragraphTitles.introduction }),
      ]),
  ),
};
