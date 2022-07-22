import m from 'mithril';
import { Socials } from '../ui/socials/socials';

import './footer.css';

export const Footer = {
  view: () =>
    m('footer.footer', [
      m('.footer__wrapper', [
        m('.footer__left',  [ 'Copyright 2022',
          m('a.footer__copy-link[href=example.com]', 'Super Puper Co'),
          '.',
        ]),
        m('.footer__right', m(Socials)),
        m('.footer__bottom', 'The information contained on this site is for general informational purposes only and is not intended to be relied upon by the visitor. All software and firmware available on this site is provided AS IS and for research purposes only. OpenIPC shall not be liable for any loss or damage caused by the use of these files or the use of, or reliance upon, any information contained in this site.'),
      ])
    ]),
};
