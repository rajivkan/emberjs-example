define(["ember", "jquery"], function ( Ember, $) { 
 
var app = Ember.Application.create({LOG_TRANSITIONS: true});
  app.Router = Ember.Router.extend({enableLogging:true});
  app.Router.map(function () {
    this.resource('login', {path:'/' });
    this.resource('home', {path:'/home/:id' });
  });
   app.deferReadiness();
  window.App = app;
  return app;
});

