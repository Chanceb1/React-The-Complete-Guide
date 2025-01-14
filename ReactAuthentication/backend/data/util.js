const fs = require('node:fs/promises');

async function readData() {
  const data = await fs.readFile('events.json', 'utf8');
  return JSON.parse(data);
}

async function writeData(data) {
  await fs.writeFile('events.json', JSON.stringify(data));
  // try {
  //   const filePath = path.join(__dirname, '..', 'events.json');
  //   await fs.writeFile(filePath, JSON.stringify(data, null, 2));
  //   console.log('Data written successfully to:', filePath);
  // } catch (error) {
  //   console.error('Error writing data:', error);
  //   throw error;
  // }
}

exports.readData = readData;
exports.writeData = writeData;