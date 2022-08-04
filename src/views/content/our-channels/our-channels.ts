import m from 'mithril';
import { ParagraphTitle } from '../../ui/titles/paragraph-title/paragraph-title';
import { ProjectItem } from '../../ui/project-item/project-item';
import { DonateBanner } from '../../ui/donate-banner/donate-banner';
import { ChatBanner } from '../../ui/chat-banner/chat-banner';

import { ourChannels } from '../../../shared/constants/our-channels/our-channels';
import {paragraphTitles} from '../../../shared/constants/titles';

import './our-channels.css';

export const OurChannels = {
  view: ({ attrs : { pageTitle }} : { attrs: { pageTitle: string }}) =>
    m('.our-channels', [
      m('section.channels',
        m('dl.projects-list',
          ourChannels.channels.map((el) =>
            m(ProjectItem, {
              link: el.link,
              title: el.title,
              description: el.description }
            )
          ),
        ),
      ),
      m('section.chats',
        m(ParagraphTitle, { title: paragraphTitles['our-channels'].chat }),
        m('.chats__banners',
          ourChannels.banners.map((chat) =>
            m(ChatBanner, {
              title: chat.title,
              link: chat.link,
            }),
          ),
        ),
      ),
      m(DonateBanner),
    ]),
}
