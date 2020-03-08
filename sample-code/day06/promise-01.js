// callback
function doSomethingAsyncWithCallback(successCallback, errorCallback) {
	// const exception = 'Unknown exception';
	const exception = null;

	if (!exception) {
		successCallback({});
	} else {
		errorCallback(exception);
	}
};

doSomethingAsyncWithCallback(
	function successCallback(result) {
		console.log('doSomethingAsyncWithCallback result');
		console.log(result);
	}, function failureCallback(err) {
		console.log('doSomethingAsyncWithCallback error');
		console.error(err);
	}
);

console.log('=========');

function doSomethingAsync() {
	return new Promise((resolve, reject) => {
		const exception = 'Unknown exception';
		// const exception = null;

		if (exception) {
			reject(exception);
		}

		resolve(true);
	});
}

// Promise:
const promise = doSomethingAsync();
promise.then(
	function successCallback(result) {
		console.log('doSomethingAsync result');
		console.log(result);
	}, function failureCallback(err) {
		console.log('doSomethingAsync error');
		console.error(err);
	}
);