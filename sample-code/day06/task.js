module.exports.sleep = () => {
  return Promise.resolve('sleep');
}

module.exports.driveInDrunk = async () => {
  return Promise.reject('I am drunk.');
}