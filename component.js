'use strict';

class Leader {
	constructor(name) { //constructor构造函数
		this.name = name;
	}
	hello() { //定义在原型上的函数
		alert('Hello, ' + this.name + '!');
	}
}

export default Leader;