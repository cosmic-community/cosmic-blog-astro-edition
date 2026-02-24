import { marked } from 'marked'

export function renderMarkdown(content: string): string {
  if (!content) return ''

  // Configure marked for clean rendering
  marked.setOptions({
    gfm: true,
    breaks: true,
  })

  return marked.parse(content) as string
}