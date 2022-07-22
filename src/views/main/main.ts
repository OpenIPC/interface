import m from 'mithril';
import { PageTitle } from '../ui/titles/page-title/page-title';
import { ParagraphTitle } from '../ui/titles/paragraph-title/paragraph-title';
import { IntroductionMainLink } from '../ui/links/introduction-main-links/introduction-main-link';

import { pageTitles, paragraphTitles } from '../../shared/constants/titles';

import './main.css';

export const Main = {
  view: () =>
    m('main.main',
      m('section.section', [
        m(PageTitle, { text: pageTitles.introduction }),
        m(IntroductionMainLink, { label: 'Precompiled binary files' }),
        m(IntroductionMainLink, { label: 'Source code on GitHub' }),
    ]),
  ),
};
