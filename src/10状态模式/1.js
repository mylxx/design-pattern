// 状态模式
// 一个对象有状态变化 ， 每次状态变化都会触发一个逻辑， 不能总是用if..else..来控制

// 示例
// 1， 
class State{
	constructor(color) {
		this.color = color
	}
	handle(context) {
		console.log(`turn to ${this.color}`)
		context.setState(this)
	}
}

class Context {
	constructor(){
		this.state = null
	}

	getState() {
		return this.state
	}

	setState(state){
		this.state = state
	}
}

let context = new Context()
let green = new State('g')
let yellow = new State('y')
let red = new State('r')

green.handle(context)
console.log(context.getState())




