// callback
doSomethingAsync(successCallback, errorCallback);

// Promise:
const promise = doSomethingAsync();
promise.then(successCallback, failureCallback);