import m from 'mithril';
import { ParagLink } from '../parag-link/parag-link';

import './donate-banner.css';

export const DonateBanner = {
  view: () =>
    m('section.donate-us',
      m('.donate-us__wrapper',
        m('.donate-us__content', [
          m('.donate-us__button',
            m('img[src=https://opencollective.com/webpack/donate/button.png?color=blue]'),
          ),
          m('.donate-us__text', [
            m('h5.donate-us__text-header', 'Do you like what we do?'),
            m(ParagLink, { text: 'Please consider [supporting our projects](https://openipc.org/support-open-source)', pClass: 'donate-us__text-body' }),
          ]),
        ]),
      ),
    ),
}
