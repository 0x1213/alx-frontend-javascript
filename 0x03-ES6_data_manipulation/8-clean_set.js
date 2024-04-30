export default function cleanSet(set, startString) {
  const arr = [];

  if (typeof set !== 'object' || typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  for (const e of set) {
    if (e && e.startsWith(startString)) {
      arr.push(e.slice(startString.length));
    }
  }

  return arr.join('-');
}
