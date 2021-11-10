class Transport {
  async log(_data) {
    throw new Error('implement write method');
  }
}

export { Transport as default };
