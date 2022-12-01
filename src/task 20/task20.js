// Fill in this regular expression.
var number = /^([\-|\+|\~]?\d+(\.?)(\/?)(\d+)?(m[+|\-])?(e[-|+]?\d+)?(k)?|[-|+]?\.(\d+)(e[-|+]?\d+)?)$/i;

// Tests:
function doTestNumber() {
    ["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4",
     "1e+12", '3k', '3K', '2.2m+', '2.2M-', '1/4', '001010', '~7'].forEach(function(s) {
      if (!number.test(s)) {
          console.log("Failed to match '" + s + "'");
          return false;
      }
    });
    ["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5",
     "."].forEach(function(s) {
      if (number.test(s)) {
          console.log("Incorrectly accepted '" + s + "'");
          return false;
      }
    });
}

function validator(){
const atLeast8characters = /^.{8,}$/
const latinCharacters = /^[a-z]+$/i;
const numBer = /^\d+$/
const symbol = /^\s+$/
var password = "12345"

if( atLeast8characters.test(password) &&
    latinCharacters.test(password)&& 
    numBer.test(password)&&
    symbol.test(password) ){
    console.log('ok');
} else {
    console.log('wrong');
}
};