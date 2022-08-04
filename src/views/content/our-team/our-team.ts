import m from 'mithril';
import { ParagLink } from '../../ui/parag-link/parag-link';
import { TeamCard } from '../../ui/team-card/team-card';
import { IntroductionMainLink } from '../../ui/links/introduction-main-links/introduction-main-link';
import { DonateBanner } from '../../ui/donate-banner/donate-banner';
import OTtexts from '../../../shared/constants/our-team/texts'; 
import team from '../../../shared/constants/our-team/team';
import './our-team.css';

export interface Person {
  nick: string
  descr: string
  img: string
  githubNick: string
  telegramNick: string
}

export const OurTeam = {
  view: () => [
    m('section.our-team',
      m('article.team', [
        m(ParagLink, { text: OTtexts['our-team'], pClass: 'team__intro' }),
        m('ul.team__list',
          team.map((person: Person) => m(TeamCard, { person }))
        ),
        m(IntroductionMainLink, { label: 'View list of all contributors' }),
      ]),
    ),
    m(DonateBanner),
    ],
}
