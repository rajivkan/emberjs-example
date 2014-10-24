require.config({
  config: {
    text: {
      useXhr: function (url, protocol, hostname, port) {
        return true;
      }
    }
  },
  paths: {
    jquery: 'libs/jquery-2.0.3.min',
    handlebars: 'libs/handlebars-1.0.0-rc.4',
    ember: 'libs/ember-1.0.0-rc.6',
    text: 'libs/text-loader-plugin',
    Q: "libs/q.min",
    underscore: "libs/underscore-min"
  },
  shim: {
    'ember': {
      deps: ['jquery', 'handlebars'],
      exports: 'Ember'
    },
    underscore: {
      exports: "_"
    },
    handlebars: {
      exports: "Handlebars"
    }
  }
});
var setupApp = function () {
  require(["app", 'text!templates/main.tpl', 'ember', 'handlebars', "controllers/login-controller", "controllers/home-controller"], function ( app, mainTemplate, Ember) { 
     
      app.ApplicationController = Ember.Controller.extend();
       app.ApplicationView = Ember.View.extend({
        template: Ember.Handlebars.compile(mainTemplate),
        templateName: "main"
      });
      app.advanceReadiness(); 
    });
};

window.addEventListener("load", setupApp(), false);
