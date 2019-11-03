var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // How do we want to organize submit forms // roomname, text, username
    var message = {
      roomname: Rooms.selected,
      text: $('form').find('#message').val(),
      username: App.username
    };
    // Submit message to a specified resource
    Parse.create(message, (data) => {
      //data get back from parse on create is the remaining properties we need.
      _.extend(message, data);
      Messages.add(message, MessagesView.renderMessages);
      // Stop the browser from submitting the form
      console.log('click!');
    })
  },
  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('enable', status);
  }
};