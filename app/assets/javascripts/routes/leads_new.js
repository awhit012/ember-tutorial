App.LeadsNewRoute = Ember.Route.extend({

  setupController: function(controller) {
    controller.set('showError', false);
    controller.set('fields', {})
  }

});