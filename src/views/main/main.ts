import m from 'mithril';
import { PageTitle } from '../ui/titles/page-title/page-title';
import { ParagraphTitle } from '../ui/titles/paragraph-title/paragraph-title';

import { pageTitles, paragraphTitles } from '../../shared/constants/titles';

import './main.css';

export const Main = {
  view: () =>
    m('.main', [
      m(PageTitle, { text: pageTitles.introduction }),
      m(ParagraphTitle, { text: paragraphTitles.introduction.open }),
      m(ParagraphTitle, { text: paragraphTitles.introduction.why }),
      m(ParagraphTitle, { text: paragraphTitles.introduction.alliance }),
    ]),
};
