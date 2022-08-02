import m from 'mithril';
import { paragLink } from '../../../shared/utils/parag-links';

export const ParagLink = {
  view: ({ attrs: { text, pClass }}: {attrs: { text: string, pClass: string}}) =>
    m(`p.${pClass}`,
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
