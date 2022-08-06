import m from 'mithril';

import './solid-button.css';

interface ISolidButton {
  attrs: {
    label: string
    bgColor: 'button-blue' | 'grey'
    labelColor: string
  }
}

export const SolidButton = {
  view: ({ attrs: { label, bgColor, labelColor }}: ISolidButton) =>
    m('button.solid-button[type=text]', {
        class:`
          solid-button_bg_${bgColor || 'white'}
          solid-button_color_${labelColor || 'black'}
        `,
      },
      label
    )
}
