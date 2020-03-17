function Event() {
  this.eventPool = {};
  this.TYPE = {
    normal: 1,
    once: 2
  };
}

Event.prototype = {
  addCallback(eventName, type, callback) {
    if (!this.eventPool[eventName]) {
      this.eventPool[eventName] = {
        callbacks: [],
        hasOnce: false
      };
    }
    if (typeof callback === 'function') {
      this.eventPool[eventName].callbacks.push({
        type: type,
        callback: callback
      });
      this.eventPool[eventName].hasOnce = type === this.TYPE.once;
    } else {
      console.warn('the callback arg shoule be function!');
    }
  },
  // 常规监听
  on: function(eventName, callback) {
    this.addCallback(eventName, this.TYPE.normal, callback);
  },
  // 监听的事件只触发一次
  once: function(eventName, callback) {
    this.addCallback(eventName, this.TYPE.once, callback);
  },
  // 触发事件
  emit: function(eventName) {
    if (!this.eventPool[eventName]) {
      return false;
    }
    var args = Array.prototype.slice.call(arguments, 1);
    this.eventPool[eventName].callbacks.forEach(function(item) {
      item.callback.apply(this, args);
    });
    // 清除once
    if (this.eventPool[eventName].hasOnce) {
      this.clearOnce(eventName);
    }
  },
  // 删除指定事件的once callback
  clearOnce: function(eventName) {
    var newList = [];
    var list = this.eventPool[eventName].callbacks;
    for (var i = 0; i < list.length; i++) {
      if (list[i].type !== this.TYPE.once) {
        newList.push(list[i]);
      }
    }
    this.eventPool[eventName].callbacks = [].concat(newList);
    this.eventPool[eventName].hasOnce = false;
  },
  // 清楚事件的所有的callback
  clear: function(eventName) {
    if (!!this.eventPool[eventName]) {
      this.eventPool[eventName] = null;
    }
  }
};

export default Event;
