import m from 'mithril';
import  socialIcons from '../../../shared/icons/socials';
import { Person } from '../../content/our-team/our-team';
import './team-card.css';

export const TeamCard = {
  view: ({ attrs: { person }}: { attrs: { person: Person }}) =>
    m('li.team-card', [
      m('img.team-card__img', {
        src: person.img,
        alt: 'Person picture',
      }),
      m('.team-card__body', [
        m('h5.team-card__nick', person.nick),
        m('p.team-card__descr', person.descr),
        m('ul.team-card__socials', [
          m('li.team-card__social', 
            m('a.team-card__social-link', {
              href: `https://github.com/${person.githubNick}`,
            },
              m.trust(socialIcons.github),
            ),
           ),
          m('li.team-card__social', 
            m('a.team-card__social-link', {
              href: `https://t.me/${person.telegramNick}`,
            },
              m.trust(socialIcons.telegram),
            ),
          ),
        ]),
      ]),
    ]),
}
