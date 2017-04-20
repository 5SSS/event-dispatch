# event-dispatch
javascript event dispatcher

//example

import { eventDispatch } from 'eventDispatch.js';

eventDispatch.on('hello',function(){
	console.log('say hello');
});

eventDispatch.emit('hello');  //say hello

eventDispatch.on('max',function(a, b) {
	console.log(a > b ? a : b);
});

eventDispatch.emit('max',2,3); //3