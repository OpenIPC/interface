import m from 'mithril';
import icons from '../../../shared/icons/index';

import './chat-banner.css';

export const ChatBanner = {
  view: ({ attrs: { title, link }}: { attrs: {title: string, link: string}}) =>
    m('.chat-banner', [
      m('.chat-banner__chat-data', [
        m('.chat-banner__chat-title', title),
        m(`a.chat-banner__chat-link[href=${link}]`,
          link
        ),
      ]),
      m('.chat-banner__chat-icon',
        m.trust(icons.gitter),
      ),
    ]),
}
