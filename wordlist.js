'use strict';

var passHolder = 'Log(-1)2is-1byPi2';

var random = require('node-random');
var _ = require('lodash');
var Q = require('q');


var wordList = require('./wordlist.json');

var rollDice = function(numDice, sides) {
  var deferred = Q.defer();

  random.integers({
    number: numDice,
    minimum: 1,
    maximum: sides
  }, function(error, data) {
    if (error) throw error;
//  data.forEach(function(d) {
//    console.log(d);
//  });

    deferred.resolve(data);
  });

  return deferred.promise;
};

Q.all([
  rollDice(5,6),
  rollDice(5,6),
  rollDice(5,6),
  rollDice(5,6),
])
  .then(function(results) {
    var pass = '';
    _.forEach(results, function(result) {
      var str = _.reduce(result, function(str, num) { return str += num.toString(); }, '');
      console.log(wordList[str]);
      pass += wordList[str] + ' ';
//      console.log(str + ': ' + wordList[str]);
    });
    console.log(pass);
    process.exit();
  });

//random.sequences({
//  "minimum": 1,
//  "maximum": 6,
//  "columns": 4
//}, function(error, data) {
//  if (error) throw error;
//  console.log(data);
////  console.log(data[0][1]);
////  console.log(data[1][1]);
////  console.log(data[2][1]);
//});