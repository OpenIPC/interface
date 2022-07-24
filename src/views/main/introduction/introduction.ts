import m from 'mithril';
import { ParagraphTitle } from '../../ui/titles/paragraph-title/paragraph-title';
import { IntroductionMainLink } from '../../ui/links/introduction-main-links/introduction-main-link';
import { Alliance } from './alliance/alliance';
import { Supporters } from './supporters/supporters';
import supporters from '../../../shared/constants/supporters';
import texts from '../../../shared/constants/texts';

import './introduction.css';

export const Introduction = {
  view: ({ attrs: { titles }}) =>
    m('.introduction', [
      m('.introduction__main', [
        m(ParagraphTitle, { title: titles.open }),
        m('p.main-text', texts.introduction.open.p1),
        m('p.main-text', texts.introduction.open.p2),
        m('.main-links', [
          m(IntroductionMainLink, { label: 'Precompiled binary files' }),
          m(IntroductionMainLink, { label: 'Source code on GitHub' }),
        ]),
        m('p.main-text', texts.introduction.open.p3),
        m(ParagraphTitle, { title: titles.why }),
        m('p.main-text', texts.introduction.why.p1),
        m('p.main-text', texts.introduction.why.p2),
        m('p.main-text', texts.introduction.why.p3),
        ]),
      m('.introduction__collab', [
        m(Alliance, { title: titles.alliance }),
        m(Supporters, { title: titles.supporters, supporters: supporters }),
      ]),
    ]),
};
