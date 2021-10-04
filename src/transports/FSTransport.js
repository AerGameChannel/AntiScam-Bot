const fs = require('fs/promises');
const { Transport } = require('./Transport');

class FSTransport extends Transport {
  constructor(filePath) {
    super();
    
    this._filePath = filePath;
  }

  async log(data) {
    await fs.appendFile(this._filePath, data, 'utf-8');
  }
}

exports.FSTransport = FSTransport;