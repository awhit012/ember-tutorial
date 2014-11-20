App.LeadEditController = Ember.ObjectController.extend({

  actions: {

    saveChanges: function(){
      var self = this;
      this.get('model').save().then(function(){
        self.transitionToRoute('lead');
      })
    },

    cancel: function(){
      this.get('model').rollBack();
      this.transitionToRoute('lead');
    }
  }
})

App.LeadEditRoute = Ember.Route.extend({

  activate:   function() {
    this.controllerFor('lead').set('isEditing', true)
  },

  deactivate: function() {
    this.controllerFor('lead').set('isEditing', false)
  }

})