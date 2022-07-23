import m from 'mithril';
import { ParagraphTitle } from '../../../ui/titles/paragraph-title/paragraph-title';

import allianceIcons from '../../../../shared/icons/alliance/index';
import './alliance.css';

export const Alliance = {
  view: ({ attrs: { text }}) =>
    m('.alliance', [
      m(ParagraphTitle, { text: text }),
      m.trust(allianceIcons.openipc),
      m.trust(allianceIcons.majestic),
  ]),
};
