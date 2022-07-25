import m from 'mithril';
import { Header } from './header/header';
import { Main } from './main/main';
import { Footer } from './footer/footer';

export const Layout = {
  view: ({ attrs: { pageTitle }, children }) =>
    m('.page', [
      m(Header),
      m(Main, { pageTitle }, children),
      m(Footer),
    ]),
};
