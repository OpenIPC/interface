import m from 'mithril';

import icons from '../../../../shared/icons';
import './burger-button.css';

export const BurgerButton = {
  view: ({ attrs : { clickHandler }}) => 
    m('button.burger-button[name=burger-button]',
      { onclick: clickHandler },
      m.trust(icons.burger),
     )
};
