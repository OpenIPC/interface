import m from 'mithril';

import './column-titles.css';

export const ColumnTitles = {
  view: () =>
    m('ul.column-titles', [
      m('li.column-titles__title', 'Stage'),
      m('li.column-titles__title', 'SoC Model'),
      m('li.column-titles__title', 'Docs'),
      m('li.column-titles__title', 'U-Boot'),
      m('li.column-titles__title', 'Linux'),
      m('li.column-titles__title', 'SDK'),
      m('li.column-titles__title', 'Load address'),
      m('li.column-titles__title', 'Build Status'),
    ]),
}
