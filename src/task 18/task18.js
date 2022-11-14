verify(/car|cat/,
       ["my car", "bad cats"],
       ["camper", "high art"]);

verify(/pop|prop/,
       ["pop culture", "mad props"],
       ["plop"]);

verify(/ferret|ferrari|ferry/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

verify(/ious\b/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

verify(/\s\.|\:|\;/,
       ["bad punctuation ."],
       ["escape the dot"]);

verify(/\w{7,}/,
       ["hottentottententen"],
       ["no", "hotten totten tenten"]);

verify(/\b[^e\s]+\b/,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape"]);

function verify(regexp, yes, no) {
    // Ignore unfinished exercises
    if (regexp.source === "...") {
        return false;
    }
    yes.forEach(function(s) {
        if (!regexp.test(s)) {
            console.log("Failure to match '" + s + "'");
            return false;
        }
    });
    no.forEach(function(s) {
        if (regexp.test(s)) {
            console.log("Unexpected match for '" + s + "'");
            return false;
        }
    });
}



