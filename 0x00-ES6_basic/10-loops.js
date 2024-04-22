export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const elem of array) {
    newArray[array.indexOf(elem)] = appendString + elem;
  }
  return newArray;
}
