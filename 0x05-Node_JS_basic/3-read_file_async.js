const fs = require('fs');

async function countStudents(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8', (err, content) => {
      if (err) {
        console.log(err)
        reject(Error('Cannot load the database'));
        return;
      }
      const CS = [];
      const SWE = [];
      content = content.split('\n');
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
    })
  
  })
}

module.exports = countStudents;
