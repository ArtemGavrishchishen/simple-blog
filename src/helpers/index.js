export const toTrimString = text => {
  if (typeof text !== 'string') return text
  return text.length > 20 ? text.substring(0, 23) + '...' : text
}
