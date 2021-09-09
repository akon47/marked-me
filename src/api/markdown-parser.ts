import marked from "marked";

const markedOptions = {
  renderer: new marked.Renderer(),
  gfm: true,
  headerIds: false,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: true,
} as marked.MarkedOptions;

const emailRegex =
  /(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;

export function toHtml(markdownText: string): string {
  const html = marked(markdownText, markedOptions);
  return html.replace(emailRegex, '<a href="mailto:$&">$&</a>');
}
