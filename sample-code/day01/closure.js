
function makeFunc() {
	// var who = 'JavaScript'; //-> local
	
  function displayText() {
    var what = 'is awesome'; //-> local
		console.log(`${who} ${what}`);
		
		return undefined;
	}
	
	var who = 'JavaScript'; //-> local
  return displayText;
}
var myFunc = makeFunc();

const result = myFunc();

// IIFE
(() => {
	const TIME_OUT = 1000;

	return {
		name: 'abc',
		getTimeout: function() {
			console.log(TIME_OUT);
		},
	};
})();

console.log(TIME_OUT);