import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'select',

  change(event) {
    let value = event.target.value;
    this.attrs.changeAction(value);
  }
});
