import m from 'mithril';
import { ColumnTitles } from '../column-titles/column-titles';
import { Soc } from './soc/soc';

import './socs.css';

export const Socs = {
  view: ({ attrs: { socs }}) =>
    m('.socs', [
      m(ColumnTitles),
      m('ul.socs__list',
        m('li.socs__item',
          socs.map((soc) => m(Soc, { soc })),
        ),
      ),
    ]),
}
