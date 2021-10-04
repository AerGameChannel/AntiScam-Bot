require('dotenv').config();

const path = require('path');

const TOKEN = process.env.TOKEN;
const BLOCKS_PATH = path.join(__dirname, '..', 'blocks.txt');

module.exports = { TOKEN, BLOCKS_PATH };
