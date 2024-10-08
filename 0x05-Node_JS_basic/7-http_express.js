const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

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

        for (const line of lines.slice(1)) {
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

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((result) => {
      let output = 'This is the list of our students\n';
      output += `Number of students: ${result.total}\n`;
      output += `Number of students in CS: ${result.csCount}. List: ${result.csList.join(', ')}\n`;
      output += `Number of students in SWE: ${result.sweCount}. List: ${result.sweList.join(', ')}`;
      res.send(output);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
});
app.listen(port, () => {});

module.exports = app;
