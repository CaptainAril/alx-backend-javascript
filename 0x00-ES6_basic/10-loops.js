export default function appendToEachArrayValue(array, appendString) {
  for (let idx of array) {
    console.log(idx);
    // let value = array[idx];
    // console.log(value);
    
    idx = appendString + idx;
    console.log(array[idx])
  }

  return array;
}
