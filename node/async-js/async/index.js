// Приклад використання async/await
const readFile = util.promisify(fs.readFile);

const readData = async () => {
    try {
        const data = await readFile('file.txt', 'utf8');
        console.log(data);
    } catch (err) {
        console.error(err);
    }
};

readData();
