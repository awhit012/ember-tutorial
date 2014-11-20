App.LeadRoute = Ember.Route.extend({

  model: function(params) { return this.store.find('lead', params.id) }

})

App.Lead.reopenClass({
  STATUSES: ['new', 'in progress', 'closed', 'bad']
});