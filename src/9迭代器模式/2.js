// 顺序访问一个集合 
// 使用者无需知道集合内部结构（封装）


class Iterator{
	constructor(container) {
		this.list = container.list
		this.index = 0
	}

	next() {
		if (this.hasNext()) {
			return this.list[this.index++]
		}
		return null
	}
	
	hasNext() {
		if(this.index >= this.list.length) {
			return false
		}
		return true
	}

}
class Container {
	constructor(list) {
		this.list = list
	}

	getIterator() {
		return new Iterator(this)
	}
}

let container = new Container([1,2,3,4,5])
let iterator = container.getIterator()

while(iterator.hasNext()) {
	console.log(iterator.next())
}








