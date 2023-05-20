const fs = require('fs');

function countStudents(file) {
  let content;
  const CS = [];
  const SWE = [];
  try {
    content = fs.readFileSync(file, 'utf-8');
    content = content.split('\n');
    content.shift();
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  while (content[content.length - 1] === '') {
    content.pop();
  }
  console.log(`Number of students: ${content.length}`);

  for (const student of content) {
    if (student.includes('CS')) {
      CS.push(student);
      // continue;
    }
    if (student.includes('SWE')) {
      SWE.push(student);
    }
  }

  function firstNames(data) {
    return data.map((entry) => entry.split(',')[0]).join(', ');
  }

  console.log(`Number of students in CS: ${CS.length}. List: ${firstNames(CS)} `);
  console.log(`Number of students in SWE: ${SWE.length}. List: ${firstNames(SWE)}`);
}

module.exports = countStudents;
