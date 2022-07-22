import m from 'mithril';
import Header from './views/header/header';
import { Main } from './views/main/main';
import { Footer } from './views/footer/footer';
import './shared/styles/global.css';
import './shared/styles/palette.css';
import './shared/styles/fonts.css';

const Page = {
  view: () => m('div.page', [m(Header), m(Main), m(Footer)]),
};

m.mount(document.body, Page);
