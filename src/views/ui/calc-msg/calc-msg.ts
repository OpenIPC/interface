import m from 'mithril';

import './calc-msg.css';

export const CalcMsg = {
  view: ({ attrs: { msg }}: { attrs: { msg: string }}) =>
    m('.calc-msg',
      m('.calc-msg__msg-container',
        m('p.calc-msg__msg', msg),
      ),
    ),
}
