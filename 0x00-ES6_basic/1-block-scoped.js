export default function taskBlock(trueorFalse) {
  const task = false;
  const task2 = true;

  if (trueorFalse) {
    /* eslint-disable */
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
