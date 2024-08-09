export async function markdownToHtml(markdown) {
  const { remark } = await import('remark');
  const remarkHtml = (await import('remark-html')).default;

  const result = await remark().use(remarkHtml).process(markdown);
  return result.toString();
}
