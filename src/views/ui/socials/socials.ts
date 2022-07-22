import m from 'mithril';

import './socials.css';
import socials from '../../../shared/constants/socials';

export const Socials = {
  view: () =>
    m('ul.socials',
      socials.map((social) => {
        const socialName = Object.keys(social)[0]; 
        return m('li.socials__item', [
          m('a.socials__link', {
            href: social[socialName].link,
          }, [
            m.trust(social[socialName].icon),
          ])
        ])
      }),
    ),
};
