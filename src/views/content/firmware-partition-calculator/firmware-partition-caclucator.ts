import m from 'mithril';
import { CalcTable } from '../../ui/calc-table/calc-table';
import { CalcPartitChart } from '../../ui/calc-partit-chart/calc-partit-chart';

import './firmware-partition-calculator.css';

export const FirmwarePartitionCalculator = {
  view: () =>
    m('section.fw-partit-calc', [
      m(CalcTable),
      m(CalcPartitChart, {
        fSize: 16 * 1024,
        p1Size: 256,
        p2Size: 64,
        p3Size: 2048,
        p4Size: 5120,
      }),
      m('.calc-msg', ),
    ]),
}
