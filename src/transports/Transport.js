class Transport {
  async log(data) {
    throw new Error('implement write method')
  }
}

exports.Transport = Transport;