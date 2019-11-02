var Friends = {
  toggleStatus: function(name) {
    console.log(name)
  },

  createUsernameClickEvent: function() {
    $('#chats').on('click', '.username', function() {
      Friends.toggleStatus($(this).text());
    })
  }
};
Friends.createUsernameClickEvent();
