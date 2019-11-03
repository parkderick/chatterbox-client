var Messages = {
  storage: {},
  // Add Storing messages by ID in storage = message
  add: (message, cb) => {
    Messages.storage[message.objectID] = message;
    cb();
  },
  // Update Messages
  update: (messages, cb) => {
    for (var message of messages) {
      Messages.storage[message.objectID] = Messages.conform(message);
      console.log(Messages.storage);
      cb()
    }
  },
  //check if the message object conforms to expected shape
  conform: (message) => {
    message.text = message.text || '';
    message.username = message.username || '';
    message.roomname = message.roomname || '';
    return message;
  },
};