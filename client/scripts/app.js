var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.initialRender);

  },

  initialRender: function(data) {
    App.stopSpinner();
    for (var i = 0; i < 20; i++) {
      MessagesView.renderMessage(data[i]);
    }
  },

  fetch: function(callback) {
    Parse.readAll(data => {
      callback(data.results);
    });
  },

  startSpinner: function() {
    FormView.setStatus(true);
    App.$spinner.show();
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
