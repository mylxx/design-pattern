// clone 自己 生成一个新对象
// java 默认有clone 接口， 不用自己实现

// Object.create  用到了原型模式的思想
// 基于一个原型创建一个对象

// 一个原型对象

const prototype = {
	getName: function(){
		return this.first + '' + this.last
	},
	say: function() {
		alert('hello')
	}
}

// 
let x = Object.create(prototype)
x.first = 'xf'
x.last = 'xl'
x.say()

// 