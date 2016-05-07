import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'select',

  optionLabelPath: 'name',
  optionValuePath: 'code',

  change(event) {
    let label = event.target.selectedOptions[0].text;
    let selected = this.get('regions').findBy(this.get('optionLabelPath'), label);
    let value = Ember.get(selected, this.get('optionValuePath'));
    this.attrs.changeAction(value);
  }
});
