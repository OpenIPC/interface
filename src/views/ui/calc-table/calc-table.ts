import m from 'mithril';

import './calc-table.css';

export const CalcTable = {
  view: () =>
    m('.calc-table', 
      m('.calc-table__cell.cell.cell_1-1',
        m('label.cell__label[for=mtd-dev-name]', 'MTD device name'),
        m('input.cell__input.cell__input_name[id=mtd-dev-name]'),
       ),
      m('.calc-table__cell.cell.cell_1-2',
        m('label.cell__label[for=flash-size]', 'Flash size, MB'),
        m('input.cell__input.cell__input_dec-size[id=flash-size]'),
      ),
      m('.calc-table__cell.cell.cell_1-3.cell_border_black',
        m('label.cell__label[for=initial-offset]', 'Initial offset, dec or hex'),
        m('input.cell__input.cell__input_hex_black[id=initial-offset]'),
      ),
      m('.calc-table__cell.cell.cell_recalc.cell_1-4'),
      m('.calc-table__cell.cell_2-1'),
      m('.calc-table__cell.cell_2-2'),
      m('.calc-table__cell.cell_2-3'),
      m('.calc-table__cell.cell_2-4'),
      m('.calc-table__cell.cell_2-5'),
    ),
};
