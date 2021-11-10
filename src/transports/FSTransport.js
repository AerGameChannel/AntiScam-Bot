import { appendFile } from 'fs/promises';
import Transport from './Transport.js';

class FSTransport extends Transport {
  constructor(filePath) {
    super();

    this._filePath = filePath;
  }

  async log(data) {
    await appendFile(this._filePath, data, 'utf-8');
  }
}

export { FSTransport as default };
