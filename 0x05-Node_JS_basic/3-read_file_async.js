const fs = require('fs/promises');

async function countStudents(file) {
  let content;
  const CS = [];
  const SWE = [];
  try {
    content = await fs.readFile(file, 'utf-8');
    content = content.split('\n');
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  content.shift();
  while (content[content.length - 1] === '') {
    content.pop();
  }

  console.log(`Number of students: ${content.length}`);

  for (const student of content) {
    if (student.includes('CS')) {
      CS.push(student.split(',')[0]);
    } else if (student.includes('SWE')) {
      SWE.push(student.split(',')[0]);
    }
  }
  console.log(`Number of students in CS: ${CS.length}. List: ${CS.join(', ')}`);
  console.log(`Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}`);
}

module.exports = countStudents;
