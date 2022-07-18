import m from 'mithril';
import './button.css';

const Button = {
  view: ({ attrs }) => {
    return m(
      'button',
      { name: attrs.label, class: 'button' },
      attrs.nested ? `${attrs.label}\/` : `${attrs.label}`,
    );
  },
}

export default Button;
