export default function hasValuesFromArray(set, array) {
  const tmpSet = new Set(array);
  for (const e of tmpSet) {
    if (set.has(e)) {
      tmpSet.delete(e);
    }
  }
  return tmpSet.size === 0;
}
