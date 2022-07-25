import m from 'mithril';
import { Socials } from '../../ui/socials/socials';
import { Copyright } from '../../ui/copyright/copyright';

import footerContent from '../../../shared/constants/footer';

import './footer.css';

export const Footer = {
  view: () =>
    m('footer.footer', [
      m('.footer__wrapper', [
        m('.footer__left',
         m(Copyright),
        ),
        m('.footer__right', m(Socials)),
        m('.footer__bottom', footerContent.text),
      ])
    ]),
};
