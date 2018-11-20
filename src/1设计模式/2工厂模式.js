// 工厂模式
class Product {
	constructor(name){
		this.name = name
	}
	init(){
		alert('init')
	}
	fun1(){
		alert('fun1')
	}
	fun2(){
		alert('fun2')
	}
}

class Creator {
	create(name){
		return new Product(name)
	}
}

let creator = new Creator()
let p = creator.create('p1')
p.init()

// 应用场景
// JQuery  $('div')
// React.createElement
// vue 异步组件

// 1, JQuery  $('div')
// class jQuery {
// 	constructor(selector) {
// 		let slice = Array.prototype.slice
// 		let dom = slice.call(querySelectorAll(selector))
// 		let len = dom ? dom.length : 0
// 		for (let i = 0; i < len; i++) {
// 			this[i] = dom[i]
// 		}
// 		this.length = len
// 		this.selector = selector || ''
// 	}
// 	append(node){}
// 	addClass(name){

// 	}
// 	html(data){}
// }
// window.$ = function(selector){
// 	return new JQuery(selector)
// }
