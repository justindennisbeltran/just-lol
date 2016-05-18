import Ember from 'ember';
import config from '../config/environment';

export default Ember.Controller.extend({
  apiKey: Ember.computed(() => config.apiKey),

  region: Ember.inject.service(),
  regions: Ember.computed.alias('region.regions'),
  currentRegion: Ember.computed.alias('region.current'),

  summonerName: 'Just',

  actions: {
    changeRegion(name) {
      let region = this.get('regions').findBy('name', name);
      this.set('currentRegion', region);
    },

    getSummoner() {
      const host = this.get('currentRegion.host');
      const code = this.get('currentRegion.code');
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
