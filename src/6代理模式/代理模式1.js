// 使用者无权访问目标对象
// 中间加代理，通过代理做授权和控制
// 示例 1，科学上网 2，明星经纪人

// class RealImg{
// 	constructor(fileName){
// 		this.fileName = fileName
// 		this.loadFromDisk() //初始化即从硬盘加载 模拟
// 	}
// 	display(){
// 		console.log('display...' + this.fileName)
// 	}
// 	loadFromDisk(){
// 		console.log('loading...' + this.fileName)
// 	}
// }


// class ProxyImg {
// 	constructor(fileName){
// 		this.realImg = new RealImg(fileName)
// 	}

// 	display(){
// 		this.realImg.display()
// 	}

// }

// let proxyImg = new ProxyImg('1.png')
// proxyImg.display()



// 使用场景 一 ， 网页事件代理



// 使用场景 二 ， jQuery $.proxy
// 使用场景 三，  es6 Proxy

let star = {

	name: '张三',
	age: 23,
	phone: '13999999'
}

let agent = new Proxy(star, {
	get: function(target, key){
		if (key === 'phone') {
			return '17688888'
		}
		if (key === 'price'){
			return 12000
		}
		return target[key]
	},
	set: function(target, key, val){
		if (key === 'customPrice') {
			if(val < 10000){
				throw new Error('价格太低了')

			}else{
				target[key] = val
				return true
			}
		}
	}
})

console.log(agent.name)
console.log(agent.phone)
agent.customPrice = 8000
console.log(agent.customPrice)





