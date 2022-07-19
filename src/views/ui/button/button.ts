import m from 'mithril';
import './button.css';

const Button = {
  view: ({ attrs }) =>
    m(
      'button',
      {
        name: attrs.label,
        class: 'button',
      },
      attrs.label,
    ),
}

export default Button;
