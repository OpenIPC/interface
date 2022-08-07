import m from 'mithril';

import './calc-partit-chart.css';

interface ICalcPartitChart {
  attrs: {
    fSize: number
    p1Size: number
    p2Size: number
    p3Size: number
    p4Size: number
    p5Size?: number
  }
}

export const CalcPartitChart = {
  view: ({ attrs: { fSize, p1Size, p2Size, p3Size, p4Size, p5Size }}: ICalcPartitChart) =>
    m('.calc-partit-chart',
      m('.calc-partit-chart__wrapper', [
        m('.calc-partit-chart__p1-size', {
          style: `flex: 0 0 ${p1Size / fSize * 100}%;`, 
        }),
        m('.calc-partit-chart__p2-size', {
          style: `flex: 0 0 ${p2Size / fSize * 100}%;`, 
        }),
        m('.calc-partit-chart__p3-size', {
          style: `flex: 0 0 ${p3Size / fSize * 100}%;`, 
        }),
        m('.calc-partit-chart__p4-size', {
          style: `flex: 0 0 ${p4Size / fSize * 100}%;`, 
        }),
        m('.calc-partit-chart__p5-size', {
          style: `flex: 0 0 ${p5Size ? (p5Size / fSize * 100) : ((fSize - (p1Size + p2Size + p3Size + p4Size)) / fSize * 100)}%;`, 
        }),
      ]),
    ),
}
