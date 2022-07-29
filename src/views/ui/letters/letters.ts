import m from 'mithril';

import './letters.css';

export const Letters = {
  view: ({ attrs: { letters, selectedLetter }}) =>
    m('.letters',
      m('ul.letters__list',
        letters.map((letter: String) =>
          m('li.letters__letter',
            m(m.route.Link, {
              href: `/cameras/vendors/${letter}`,
              selector: `a.letters__link${selectedLetter === letter ? '.letters__link_choosen' : ''}`,
            }, 
              letter
            ),
          )
        )
      )
    )
}
