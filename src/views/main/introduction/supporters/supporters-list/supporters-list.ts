import m from 'mithril';

import './supporters-list.css';

export const SupportersList = {
  view: ({ attrs: { supporters }}) =>
    m('ul.supporters-list',
      supporters.map((sup: {}) =>
        m('li.supporters-list__item', [
          m(`a.supporters-list__link[href=${sup['href']}]`, [
            m(`img.supporters-list__image[src=/supporters/${sup['src']}]`),
          ]),
        ])
      ),
    ),
};
