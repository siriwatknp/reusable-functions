// this should be the entry point to your library
module.exports = {
  addItemToList: require('./addItemToList').default,
  arrayToObject: require('./arrayToObject').default,
  createBooleanObject: require('./createBooleanObject').default,
  objectToArray: require('./objectToArray').default,
  howLongAgo: require('./howLongAgo').default,
  getItemField: require('./getItemField').default,
  updateItemInList: require('./updateItemInList').default,
  substringBetween: require('./substringBetween').default,
  omitKeys: require('./collection/omitKeys').default,
  omitKeysBy: require('./collection/omitKeysBy').default,
  contains: require('./collection/contains').default,
  incrementBy: require('./collection/incrementBy').default
};

