import m from 'mithril';

import './firmware-partition-calculator.css';

export const FirmwarePartitionCalculator = {
  view: () =>
    m('section.fw-prtn-calc', [
      m('.calc-table', 
        m('.calc-table__cell.cell.cell_1-1',
          m('label.cell__label', 'MTD device name'),
          m('input.cell__input.cell__input_name'),
        ),
        m('.calc-table__cell.cell_1-2'),
        m('.calc-table__cell.cell_1-3'),
        m('.calc-table__cell.cell_1-4'),
        m('.calc-table__cell.cell_2-1'),
        m('.calc-table__cell.cell_2-2'),
        m('.calc-table__cell.cell_2-3'),
        m('.calc-table__cell.cell_2-4'),
        m('.calc-table__cell.cell_2-5'),
      ),
      m('.calc-progress-bar', ),
      m('.calc-msg', ),
    ]),
}
