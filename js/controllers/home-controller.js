define(['text!templates/home.tpl', "ember", "app", "jquery", 'models/home'], function(homeTemplate, Ember, app, $, homeModel) {
  app.HomeController = Ember.ObjectController.extend({
    
  });

  app.HomeView = Ember.View.extend({
    template: Ember.Handlebars.compile(homeTemplate),
    templateName: "home",
    didInsertElement: function() {
      
    }
  });

  app.HomeRoute = Ember.Route.extend({
    setupController: function(controller, params) {
     
    }
  });

  return app;
});