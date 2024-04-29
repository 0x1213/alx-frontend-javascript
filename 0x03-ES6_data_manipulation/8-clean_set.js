export default function cleanSet(set, startString) {
  if (startString === '') return '';
  const tmp = [];
  for (const e of set) {
    if (e.startsWith(startString)) {
      tmp.push(e.replace(startString, ''));
    }
  }
  return tmp.join('-');
}
