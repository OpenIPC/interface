import m from 'mithril';
import { Header } from './views/header/header';
import { Main } from './views/main/main';
import { Footer } from './views/footer/footer';
import './shared/styles/global.css';
import './shared/styles/palette.css';
import './shared/styles/fonts.css';

const pageClickHandler = (e) => {
  console.log(e.target);
  if (
    document.querySelector('.dropdown_show')
    &&
    document.querySelector('.dropdown_show') !== e.target
  ) {
      Header.clicked = undefined;
  }
}

const Page = {
  view: () => m('div.page', { onclick: pageClickHandler }, [m(Header), m(Main), m(Footer)]),
};

m.mount(document.body, Page);
