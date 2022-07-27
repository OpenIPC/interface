import m from 'mithril';
import { PageTitle } from '../../ui/titles/page-title/page-title';
import { pageTitles } from '../../../shared/constants/titles';

import './main.css';

export const Main = {
  view: ({ attrs: { pageTitle }, children }) =>
    m('main.main', [
      m(PageTitle, { text: pageTitles[pageTitle] }),
      // m('div.main-content', children),
      children
    ]),
};
