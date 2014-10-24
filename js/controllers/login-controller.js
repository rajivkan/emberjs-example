define(['text!templates/login.tpl', "ember", "app", "jquery"], function(loginTemplate, Ember, app, $) {
  app.LoginController = Ember.ObjectController.extend({
    userId: "",
    password: "", 
    login: function() {
       this.transitionToRoute("home", {id: 1});
    }
  });

  app.LoginView = Ember.View.extend({
    template: Ember.Handlebars.compile(loginTemplate),
    templateName: "login",
    didInsertElement: function() {
      // debugger;
    }
  });

  app.LoginRoute = Ember.Route.extend({
    setupController: function(controller) {
       console.log('');
    }
  });

  return app;
});