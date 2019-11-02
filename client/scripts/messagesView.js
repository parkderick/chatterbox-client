var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // console.log(data);
    // for (var i = 0; i < data.results.length; i++) {
    //   $('#chats').append(MessageView.render(data.results[i]));
    // }
  },

  render: function() {
  },

  renderMessage: function(data) {
    $('#chats').append(MessageView.render(data));
  }

};