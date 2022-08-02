import m from 'mithril';
import { ParagraphTitle } from '../../ui/titles/paragraph-title/paragraph-title';
import { IntroductionMainLink } from '../../ui/links/introduction-main-links/introduction-main-link';
import { Alliance } from './alliance/alliance';
import { Supporters } from './supporters/supporters';
import { paragraphTitles } from '../../../shared/constants/titles';
import { ParagLink } from '../../ui/parag-link/parag-link';
import supporters from '../../../shared/constants/supporters';
import texts from '../../../shared/constants/texts';

import './introduction.css';

export const Introduction = {
  view: ({ attrs: { pageTitle }}) =>
    m('.introduction', [
      m('section.introduction__main', [
        m(ParagraphTitle, { title: paragraphTitles[pageTitle].open }),
        m('p.main-text', texts.introduction.open.p1),
        m(ParagLink,{ text: texts.introduction.open.p2}),
        m('.main-links', [
          m(IntroductionMainLink, { label: 'Precompiled binary files' }),
          m(IntroductionMainLink, { label: 'Source code on GitHub' }),
        ]),
        m(ParagLink,{ text: texts.introduction.open.p3 }),
        m('p.main-text', texts.introduction.open.p3),
        m(ParagraphTitle, { title: paragraphTitles[pageTitle].why }),
        m('p.main-text', texts.introduction.why.p1),
        m('p.main-text', texts.introduction.why.p2),
        m('p.main-text', texts.introduction.why.p3),
        ]),
      m('section.introduction__collab', [
        m(Alliance, { title:  paragraphTitles[pageTitle].alliance }),
        m(Supporters, { title: paragraphTitles[pageTitle].supporters, supporters: supporters }),
      ]),
    ]),
};
