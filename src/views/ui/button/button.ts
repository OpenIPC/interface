import m from 'mithril';
import triangle  from '../../../shared/icons/index';
import './button.css';

const Button = {
  view: ({ attrs }) =>
    m(
      'button.button',
      {
        name: attrs.label,
        onclick: attrs.clicker,
      },
      [
        attrs.label,
        m('svg', {
          width:"10",
          height:"8",
          viewBox:"0 0 4 3",
          fill:"none",
          xmlns:"http://www.w3.org/2000/svg",
        }, m('path', {
          d:"M2 3L0.267949 0.75L3.73205 0.75L2 3Z",
          fill:"white",
          'fill-opacity':"0.55",
        }),
         )
      ],
    ),
}

export default Button;
