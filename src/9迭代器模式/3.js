// 场景
// jQuery each
// ES6 Iterator

// ES6 Iterator 有序数据集合 
// Array Map Set String TypedArray arguments Nodelist
// 需要统一的一个遍历接口
// ES6 Iterator 是什么？ 以上数据类型都有 [Symbol.iterator] 属性 ， 属性值是函数，执行函数返回一个迭代器
// 这个迭代器有next() f方法可顺序迭代子元素
// ** 可运行 Array.prototype[Symbol.iterator] 来测试

// ____for of 就是 iterator

// 1
// function each(data) {
// 	// 生成遍历器
// 	let iterator = data[Symbol.iterator]()

// 	let item = {done: false}
// 	while(!item.done){
// 		item = iterator.next()
// 		console.log(item)
// 		if(!item.done){
// 			console.log(item.value)
// 		}
// 	}
// }

// let arr = [1]
// let nodeList = document.getElementsByTagName('p')
// let m = new Map()
// m.set('a', 100)
// m.set('b', 200)
// each(m)

// 2  for -- of 

// function each(data) {

// 	// 带有 遍历器特性的对象  data[Symbol.iterrator]
// 	for (let item of data) {
// 		console.log(item)
// 	}
	
// }

// let arr = [1]
// let nodeList = document.getElementsByTagName('p')
// let m = new Map()
// m.set('a', 100)
// m.set('b', 200)
// each(nodeList)

// 二， es6 Iterator 与 Generator（应用不广即将被Promise await,asyn es7 取代）

// 1），iterator 的价值不限于上述几个类型的遍历 还有Generator 函数的使用 。 3），即只要返回的数据符合 Iterator 接口的要求 即可使用 Iteratro 语法， 这就是迭代器模式








