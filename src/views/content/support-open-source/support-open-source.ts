import m from 'mithril';
import { ParagraphTitle } from '../../ui/titles/paragraph-title/paragraph-title';
import { paragraphTitles } from '../../../shared/constants/titles';
import SOSTexts from '../../../shared/constants/support-open-source/texts'; 

import './support-open-source.css';

export const SupportOpenSource = {
  view: ({ attrs: { pageTitle }}) =>
    m('section.support-open-source', [
      m('div.sos-illustration',
        m('img.sos-illustration__picture[src=https://openipc.org/assets/ninja-sponsors.webp]')
      ),
      m('div.sos-text', [
        m(ParagraphTitle, { title: paragraphTitles[pageTitle].become }),
        m('h3.sos-text__h3', SOSTexts.sponsor.header3),
        m('p.sos-text__p', SOSTexts.sponsor.p1),
        m('p.sos-text__p', SOSTexts.sponsor.p2),
        m('p.sos-text__p', SOSTexts.sponsor.p3),
        m('p.sos-text__p', SOSTexts.sponsor.p4),
        m('p.sos-text__p', SOSTexts.sponsor.p5),
        m('p.sos-text__p', SOSTexts.sponsor.p6),
        m('p.sos-text__p', SOSTexts.sponsor.p1),
        m('p.sos-text__p', SOSTexts.sponsor.p7),
        m(ParagraphTitle, { title: paragraphTitles[pageTitle].donations }),
        m('p.sos-text__p', SOSTexts.donations.p1),
        m('a[href=https://opencollective.com/openipc/contribute/backer-14335/checkout]',
          m('img[src=https://opencollective.com/webpack/donate/button.png?color=blue]'),
        ),
        m('h4.sos-text__h4', SOSTexts.donations.thanks),
      ]),
    ]),
}
