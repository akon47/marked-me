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

export function toHtml(markdownText: string): string {
  return marked(markdownText, markedOptions);
}
