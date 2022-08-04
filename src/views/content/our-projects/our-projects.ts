import m from 'mithril';
import { ParagraphTitle } from '../../ui/titles/paragraph-title/paragraph-title';
import { ProjectItem } from '../../ui/project-item/project-item';
import { DonateBanner } from '../../ui/donate-banner/donate-banner';

import { paragraphTitles } from '../../../shared/constants/titles';
import { ourProjects } from '../../../shared/constants/our-projects/our-projects';

import './our-projects.css';

export const OurProjects = {
  view: ({ attrs : { pageTitle }} : { attrs: { pageTitle: string }}) =>
    m('.our-projects', [
      m('section.core', [
        m(ParagraphTitle, { title: paragraphTitles[pageTitle].core }),
        m('dl.projects-list',
          ourProjects.core.map((el) =>
            m(ProjectItem, { link: el.link, title: el.title, description: el.description })),
        ),
      ]),
      m('section.umbrella', [
        m(ParagraphTitle, { title: paragraphTitles[pageTitle].umbrella }),
        m('p.umbrella__mention', ourProjects.mention.content),
        m('dl.projects-list',
          ourProjects.umbrella.map((el) =>
            m(ProjectItem, { link: el.link, title: el.title, description: el.description })),
        ),
      ]),
      m(DonateBanner),
    ]),
};
