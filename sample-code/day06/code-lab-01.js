function wait(time) {
  return new Promise((resolve/* , reject */) => {
		setTimeout(
			() => resolve(time), 
			time
		);
	});
}

// so that I can use it like this:
const promise = wait(2000);
promise.then(time => console.log('DONE after', time));
