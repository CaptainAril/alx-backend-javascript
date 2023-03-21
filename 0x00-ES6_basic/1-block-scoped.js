export default function taskBlock(trueorFalse) {
  const task = false;
  const task2 = true;

  if (trueorFalse) {
    /* eslint-disable */
    let task = true;
    let task2 = false;
  }

  return [task, task2];
}
