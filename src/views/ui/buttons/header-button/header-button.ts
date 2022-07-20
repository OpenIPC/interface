import m from 'mithril';
import icons from '../../../../shared/icons/index';
import './header-button.css';

export const HeaderButton = {
  view: ({ attrs: { label, clickHandler }}) =>
    m(
      'button.header-button',
      {
        name: label,
        onclick: clickHandler,
      },
      [
        label,
        m.trust(icons.triangle),
      ],
    ),
}
