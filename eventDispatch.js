/**
* 定义事件分发对象
**/

export const eventDispatch = {
	//事件队列
	eventList:{},

	//on事件
	on:function(eventName, callback) {
		this.eventList[eventName] = callback;
	}

	//emit事件
	emit:function(eventName) {
		if(arguments.length < 1) {
			//是否存在事件
			if(this.eventList[eventName]) this.eventList[eventName]();
		}else{
			var params = Array.prototype.slice.call(arguments, 1);
			this.eventList[eventName].apply(this, params);
		}
	}
};



