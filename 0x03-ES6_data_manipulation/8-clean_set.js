export default function cleanSet(set, startString) {
  if (typeof set !== 'object' || typeof startString !== 'string' || startString.length === 0) {
    return '';
  }
  const tmp = [];
  for (const e of set) {
    if (e.startsWith(startString)) {
      tmp.push(e.replace(startString, ''));
    }
  }
  return tmp.join('-');
}
