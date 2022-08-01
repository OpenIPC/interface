import m from 'mithril';
import icons from '../../../../shared/icons/index';
import './header-button.css';

export const HeaderButton = {
  view: ({ attrs: { label, clickHandler, isClicked }}) =>
    m(
      'button.header-button',
      {
        name: label,
        onclick: clickHandler,
        class: isClicked ? 'header-button_clicked' : 'header-button_unclicked',
      },
      [
        label,
        m.trust(icons.triangle),
      ],
    ),
}
