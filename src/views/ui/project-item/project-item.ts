import m from 'mithril';

import './project-item.css';

export const ProjectItem = {
  view: ({ attrs: { link, title, description }}: { attrs: { link: string, title: string, description: string }}) => [
    m('dt.projects_list__project',
      m(`a.projects_list__link[href=${link}]`,
        title
       ),
    ),
    m('dd.projects_list__description', description),
  ]
};
