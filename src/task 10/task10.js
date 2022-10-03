var ancestry = JSON.parse(ANCESTRY_FILE);
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var Mothers = function(person){
    return (byName[person.mother]!= null);
};
var Age =function(person){
    return person.born - byName[person.mother].born;
};

var MediumAge = ancestry.filter(Mothers).map(Age);
