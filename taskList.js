if (Meteor.isClient) {
  // counter starts at 0
  Template.hello.helpers({
    tasks: function () {
      return Tasks.find({});
    }
  });

  Template.hello.events({
    'click button': function () {
		Tasks.insert({text: $("#newTask").val()});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
