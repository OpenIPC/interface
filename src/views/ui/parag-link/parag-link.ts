import m from 'mithril';
import { paragLink } from '../../../models/parag-links';

export const ParagLink = {
  view: ({ attrs: { text }}) =>
    m('p.main-text',
      paragLink.split(text).map((chunk: string) => {
        if (/^\[.*?\]\(.*?\)$/ig.test(chunk)) {
          return m(`a[href=${paragLink.getTextLink(chunk).link}]`, paragLink.getTextLink(chunk).text);
        }
        else {
          return chunk;
        }
      }),
    ),
}
