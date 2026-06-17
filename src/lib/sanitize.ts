import DOMPurify from 'isomorphic-dompurify'

export function sanitizeHtml(html: string): string {
  if (!html.trim()) return ''
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['b', 'strong', 'i', 'em', 'br', 'p', 'ul', 'ol', 'li'],
    ALLOWED_ATTR: [],
  })
}
