// Приклад використання обіцянки
const readFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            reject(err);
        } else {
            resolve(data);
        }
        });
    });
};

readFile('file.txt')
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error(err);
    });
  