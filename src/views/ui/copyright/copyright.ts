import m from 'mithril';

import './copyright.css';

export const Copyright = {
  view: () =>
    m('p.copyright', [
      'Copyright 2022 ',
      m('a.copyright__link[href=https://openipc.org]', 'OpenIPC'),
      '.',
  ]),
};
