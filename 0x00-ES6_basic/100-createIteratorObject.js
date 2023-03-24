export default function createIteratorObject(report) {
  const arr = [];
  for (const k in report.allEmployees) {
    if (k) arr.push(...report.allEmployees[k]);
  }
  return arr;
}
