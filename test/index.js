'use strict';
/*global require module*/

var vows = require('vows');
var assert = require('assert');
var matchStats = require('../lib/matchstats').matchStats;

vows.describe('Match Stats').addBatch({
  'When comparing strings': {

    'positive match is accurate': {
      topic: function () {
        var str1 = 'information';
        var str2 = 'informative';
        return matchStats( str1, str2 );
      },

      '73 percent match': function (stats) {
        assert.equal( 73, stats.percent_matched ); 
      },

      'begin match is 9': function (stats) {
        assert.equal( 9, stats.begin_match );
      }
    },

    'negative match is accurate': {
      topic: function () {
        var str1 = 'information';
        var str2 = 'pie';
        return matchStats( str1, str2 );
      },

      '9 percent match': function (stats) {
        assert.equal( 9, stats.percent_matched );
      },

      'begin match is 0': function (stats) {
        assert.equal( 0, stats.begin_match );
      }
    }
    
  }
}).export(module);