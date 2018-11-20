// 概念： 用于把抽象化与实现化解耦  使得二者可以独立变化
// 常用在业务中

// 示例 ： 画一个 带颜色的图形

// 画图 和 花颜色 分离

class Color{
	constructor(name) {
		this.name = name
	}
}

class Shape {
	constructor(name, color){
		this.name = name
		this.color = color
	}

	draw() {
		console.log(`${this.color.name} ${this.name}`)
	}
}


let red = new Color('red')
let yellow= new Color('yellow')

let circle = new Shape('circle', red)
circle.draw()