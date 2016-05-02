import Ember from 'ember';

export default Ember.Controller.extend({
  regions: [
    { name: 'Brazil', code: 'BR', platformId: 'BR1', host: 'br.api.pvp.net' },
    { name: 'EU Nordic & East', code: 'EUNE', platformId: 'EUN1', host: 'eune.api.pvp.net' },
    { name: 'EU West', code: 'EUW', platformId: 'EUW1', host: 'euw.api.pvp.net' },
    { name: 'Japan', code: 'JP', platformId: 'JP1', host: 'jp.api.pvp.net' },
    { name: 'Korea', code: 'KR', platformId: 'KR', host: 'kr.api.pvp.net' },
    { name: 'Latin America North', code: 'LAN', platformId: 'LA1', host: 'lan.api.pvp.net' },
    { name: 'Latin America South', code: 'LAS', platformId: 'LA2', host: 'las.api.pvp.net' },
    { name: 'North America', code: 'NA', platformId: 'NA1', host: 'na.api.pvp.net' },
    { name: 'Oceania', code: 'OCE', platformId: 'OC1', host: 'oce.api.pvp.net' },
    { name: 'Turkey', code: 'TR', platformId: 'TR1', host: 'tr.api.pvp.net' },
    { name: 'Russia', code: 'RU', platformId: 'RU', host: 'ru.api.pvp.net' },
    { name: 'Public Beta Environment', code: 'PBE', platformId: 'PBE1', host: 'pbe.api.pvp.net' }
  ]
});
