const checkOperation = (allowUpdates, updates) => updates.every(update => allowUpdates.includes(update));

module.exports = checkOperation;
