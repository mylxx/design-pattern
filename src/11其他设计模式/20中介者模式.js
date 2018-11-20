// 概念：  对象之间频繁的相互访问
// 示例 买房 卖房 通过中介处理  （a 和 b  通过中介者m 相互访问）
class A {
	constructor() {
		this.number = 0
	}

	setNumber(num, m) {
		this.number = num
		if(m) {
			m.setB()
		}
	}
}

class B {
	constructor(){
		this.number = 0

	}
	 setNumber(num, m) {
	 	this.number = num
	 	if(m) {
	 		m.setA()
	 	}
	 }
}

// 中介者

class Mediatro{
	constructor(a, b){
		this.a = a
		this.b = b
	}
	setA(){
		let num = this.b.number
		this.a.setNumber(num*100)
	}
	setB(){
		let num = this.a.number
		this.b.setNumber(num/100)
	}
}


let a = new A()
let b = new B()
let m = new Mediatro(a, b)
a.setNumber(100, m)
console.log(a.number, b.number)
b.setNumber(100, m)
console.log(a.number, b.number)

