import m from 'mithril';
import { CalcTable } from '../../ui/calc-table/calc-table';

import './firmware-partition-calculator.css';

export const FirmwarePartitionCalculator = {
  view: () =>
    m('section.fw-prtn-calc', [
      m(CalcTable),
      m('.calc-progress-bar', ),
      m('.calc-msg', ),
    ]),
}
