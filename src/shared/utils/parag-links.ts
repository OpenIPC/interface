export const paragLink = {
  split: (text: string) => {
    return text.split(/(\[.*?\]\(.*?\))/ig);
  },
  getTextLink: (chunk: string) => {
    return {
      text: Array.from(chunk.matchAll(/\[(.*?)\]\((.*?)\)/gi))[0][1],
      link: Array.from(chunk.matchAll(/\[(.*?)\]\((.*?)\)/gi))[0][2]
    };
  }
}
