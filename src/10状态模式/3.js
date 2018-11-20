// 简单Promise 有限状态机
// 
import StateMachine from 'javascript-state-machine'

// 状态机模型
let fsm = new StateMachine({
	init: 'pending',
	transitions: [{
		name: 'resolve',
		from: 'pending',
		to:'fullfilled'
	},
	{
		name: 'reject',
		from: 'pending',
		to: 'rejected'
	}],

	methods: {
		// 监听 resolve
		onResolve: function(state, data) {
			// state -当前状态机实例； data- fsm.resolve(xx)传递的参数xx
			data.successList.forEach(fn => fn())

		},
		// 监听 reject
		onReject: function(state, data) {
			data.failList.forEach(fn => fn())


		}
	}
})

// 定义 Promise

class MyPromise{
	constructor(fn){
		this.successList = []
		this.failList = []
		fn(() => {
			// resolve
			// 注意这里要用 箭头函数 防止this 指向错误
			fsm.resolve(this)

		},
		() => {
			// reject

			fsm.reject(this)

		})
	}


	then(successFn, failFn){
		this.successList.push(successFn)
		this.failList.push(failFn)

	}

}

// 测试代码
function loadImg(src){
	const promise = new MyPromise(function(resolve, reject){
		let img = document.createElement('img')
		img.onload = function(){
			resolve()
		}

		img.onerror = function(){
			reject()
		}
		img.src = src

	})
	return promise
}

let src = 'http://wx3.sinaimg.cn/large/693ad074ly1frq8v1kl6xj20d10e8mz1.jpg'
let result = loadImg(src)
 
result.then(function(){
	console.log(11)
}, function(){
	console.log(12)

})

result.then(function(){
	console.log(21)
}, function(){
	console.log(22)

})















