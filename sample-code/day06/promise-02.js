// callback pyramid of doom:
// prettier-ignore
let doSomething = (successCallback, failCallback) => successCallback('doSomething');
let doSomethingElse = (input, successCallback, failCallback) => successCallback('doSomethingElse');
let doThirdThing = (input, successCallback, failCallback) => successCallback('doThirdThing');

// doSomething(function(result) {
//   doSomethingElse(result, function(newResult) {
//     doThirdThing(newResult, function(finalResult) {
//         console.log('Got the final result: ' + finalResult);
//       }, function failureCallback() {});
//     }, function failureCallback() {});
// }, function failureCallback() {});

// Promise way:
doSomething = async () => ('doSomething');
doSomethingElse = async (input) => ('doSomethingElse');
doThirdThing = async (input) => ('doThirdThing');

doSomething()
  .then(function(result) {
    console.log(result);
    return doSomethingElse(result);
  })
  .then(function(newResult) {
    console.log(newResult);
    return doThirdThing(newResult);
  })
  .then(function(finalResult) {
    console.log('with promise, got the final result: ' + finalResult);
  })
  .catch(function failureCallback() {});

// // shorter with Arrow function
// doSomething()
//   .then(result => doSomethingElse(result))
//   .then(newResult => doThirdThing(newResult))
//   .then(finalResult => {
//     console.log(`Got the final result: ${finalResult}`);
//   })
//   .catch(function failureCallback() {});