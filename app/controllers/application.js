import Ember from 'ember';
import config from '../config/environment';

export default Ember.Controller.extend({
  apiKey: Ember.computed(() => config.apiKey),

  region: Ember.inject.service(),
  regions: Ember.computed.alias('region.endpoints'),

  summonerName: 'Just',
  selectedRegionCode: 'OCE',

  selectedRegion: Ember.computed('selectedRegionCode', {
    get(key) {
      return this.get('regions').findBy('code', this.get('selectedRegionCode'));
    },
    set(key, value) {
      this.set('selectedRegionCode', Ember.get(value, 'code'));
      return value;
    }
  }),

  actions: {
    getSummoner() {
      const host = this.get('selectedRegion.host');
      const code = this.get('selectedRegionCode').toLowerCase();
      const summonerName = this.get('summonerName');

      let requestUrl = `https://${host}/api/lol/${code}/v1.4/summoner/by-name/${summonerName}?api_key=${config.apiKey}`;

      let promise = new Ember.RSVP.Promise((resolve, reject) => {
        Ember.$.getJSON(requestUrl, (response) => {
          let summonerData = response[summonerName.toLowerCase()];
          Ember.Logger.debug(summonerData);

          this.set('summoner', Ember.Object.create(summonerData));
        });
      });
    }
  }
});
