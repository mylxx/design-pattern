//旧接口新接口 之间的转换

class Adaptee{
	specificRequest(){
		return '德国标准插头'
	}
}

class Target{
	constructor(){
		this.adaptee = new Adaptee()
	}
	request(){
		let info = this.adaptee.specificRequest()
		return `${info}-转换-中国`
	}
}

let target = new Target()
let res = target.request()
console.log(res)

// 场景
// 1 旧接口封装
// 2 vue computed

// 1