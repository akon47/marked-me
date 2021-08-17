import marked from "marked";

const markedOptions = {
  renderer: new marked.Renderer(),
  gfm: true,
  headerIds: false,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
} as marked.MarkedOptions;

export function toHtml(markdownText: string): string {
  return marked(markdownText, markedOptions);
}
