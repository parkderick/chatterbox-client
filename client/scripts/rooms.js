var Rooms = {
  storage: {},
  selected: 'lobby',
  isSelected: roomname => {
    return roomname === Rooms.selected || !roomname && Rooms.selected === 'lobby'
  },
  update: (messages, cb) => {
    var rooms = _.pluck(messages, 'roomname');
    rooms = rooms.uniq();
    _.each(rooms, room => {
      Rooms.storage.add(room);
    })
    cb(rooms);
  },
  add: (room) => {
    storage.roomname = room;
  }
};