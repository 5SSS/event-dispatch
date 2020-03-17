# event-dispatch

## javascript event dispatcher

### example

```javascript
import AnyNames from 'eventDispatch.js';
const EventEmitter = new AnyNames();
EventEmitter.on('a', () => console.log(1));
EventEmitter.on('a', () => console.log(2));
EventEmitter.on('a', () => console.log(3));
EventEmitter.once('a', () => console.log(4));
EventEmitter.emit('a');
// 1
// 2
// 3
// 4
EventEmitter.emit('a');
// 1
// 2
// 3
EventEmitter.clear('a');
EventEmitter.emit('a');
// return false, and nothing happend~
```
