import { remark } from 'remark'; // Updated import statement
import remarkHtml from 'remark-html';
export async function markdownToHtml(markdown) {
  const result = await remark().use(remarkHtml).process(markdown);
  return result.toString();
}
