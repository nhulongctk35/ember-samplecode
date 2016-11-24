import Ember from 'ember';

export default Ember.Controller.extend({
    isWide: false,
    actions: {
        toggleImage() {
            this.toggleProperty('isWide');
        },

        filterByCity(param) {
          if (param !== '') {
            return this.get('store').query('rental', { title: param });
          } else {
            return this.get('store').findAll('rental');
          }
        }
  }
});
