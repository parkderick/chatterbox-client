var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function(room) {
    $('#rooms select').append(`<option value="${room}">${room}</option>`);
  },
  renderRooms: function() {
    $('#rooms select').append(`<option value="${room}">${room}</option>`);
  }
};
