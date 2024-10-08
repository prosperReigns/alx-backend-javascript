const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        let count = 0;
        let countCS = 0;
        let countSWE = 0;
        const listCS = [];
        const listSWE = [];

        const lines = data.split('\n');

        for (const line of lines.slice(1)) { // Skip the first line (header)
          if (line.trim() !== '') {
            count += 1;

            const fields = line.split(',');
            if (fields[3] === 'CS') {
              countCS += 1;
              listCS.push(fields[0].trim());
            } else if (fields[3] === 'SWE') {
              countSWE += 1;
              listSWE.push(fields[0].trim());
            }
          }
        }

        console.log(`Number of students: ${count}`);
        console.log(`Number of students in CS: ${countCS}. List: ${listCS.join(', ')}`);
        console.log(`Number of students in SWE: ${countSWE}. List: ${listSWE.join(', ')}`);

        resolve({
          total: count,
          csCount: countCS,
          sweCount: countSWE,
          csList: listCS,
          sweList: listSWE,
        });
      }
    });
  });
}

module.exports = countStudents;
