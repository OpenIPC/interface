import m from 'mithril';

import './introduction-main-link.css';

export const IntroductionMainLink = {
  view: ({ attrs: { label }}) =>
    m('a.introduction-main-link[href=#blank]', label),
};
