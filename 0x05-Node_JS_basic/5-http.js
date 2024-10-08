const http = require('http');
const fs = require('fs');

const host = '127.0.0.1';
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

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  switch (req.url) {
    case '/':
      res.write('Hello Holberton School!');
      res.end();
      break;
    case '/students':
      res.write('This is the list of our students\n');
      countStudents(process.argv[2]).then((result) => {
        res.write(`Number of students: ${result.total}\n`);
        res.write(`Number of students in CS: ${result.csCount}. List: ${result.csList.join(', ')}\n`);
        res.write(`Number of students in SWE: ${result.sweCount}. List: ${result.sweList.join(', ')}`);
        res.end();
      }).catch((error) => {
        res.statusCode = 500;
        res.end(error.message);
      });
      break;
    default:
      res.statusCode = 404;
      res.end('Not Found');
      break;
  }
});

app.listen(port, host, () => {});

module.exports = app;
