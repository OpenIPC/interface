import m from 'mithril';

import './letters.css';

export const Letters = {
  view: ({ attrs: { letters }}) =>
    m('ul.letters',
      letters.map((letter: String) =>
        m('li.letters__letter', letter),
      )
    )
};
