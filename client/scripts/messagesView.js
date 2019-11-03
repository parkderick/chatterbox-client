var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },
  // Gather data and load the associated templates -> apply gathered data to associated templates.
  renderMessage: function (message) {
    var $renderMsg = MessageView.render(message);
    $('#chats').append($renderMsg);
  },
  renderMessages: function () {
    _.each(Messages.storage, (message) => {
      var $renderMsg = MessageView.render(message)
      console.log($renderMsg);
      $('#chats').append($renderMsg);
    })
  },
  // items: function (data) {
  //   data.filter(message => {
  //     Room.isSelected(message))
  // }
}