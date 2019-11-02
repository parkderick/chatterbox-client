var Rooms = {

  add: function() {
    console.log('hello!')
  },

  addRoomsClickEvent: function() {
    $('#rooms button').click(function() {
      Rooms.add()
    })
  }


};
Rooms.addRoomsClickEvent();
