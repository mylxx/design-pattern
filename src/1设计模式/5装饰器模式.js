// 为对象添加新功能
// 不改变原有的结构和功能

// class Circle {
// 	draw(){
// 		console.log('画个圆')
// 	}
// }

// class Decorator {
// 	constructor(circel){
// 		this.circel = circel
// 	}
// 	draw(){
// 		this.circel.draw()
// 		console.log(circel+"----")
// 		this.setRedBorder(circel)

// 	}
// 	setRedBorder(circel){
// 		console.log('加border')
// 	}
// }

// let circel = new Circle()
// circel.draw()
// // 
// let dec = new Decorator(circel)

// dec.draw()


// 场景
// es7 装饰器  babel 已经支持( babel-plugin-transform-decorators-legacy)  (第三方的类库封装好了常用的装饰器  core-decorators)。

// 装饰类一
// 1-1.
// @testDec
// class Demo {

// }

// function testDec(target){
// 	target.isDec = true
// }

// alert(Demo.isDec)


// 1-2， 参数
// function testDec(isDec){
// 	return function(target){
// 		target.isDec = isDec
// 	}
// }
// @testDec(999)
// class Demo {

// }
// alert(Demo.isDec)


// 1-3，装饰类 mixin示例
// function mixins(...list){
// 	return function(target){
// 		console.log(...list)
// 		Object.assign(target.prototype, ...list)
// 	}
// }
// const Foo = {
// 	foo(){
// 		alert("foo")
// 	}
// }

// @mixins(Foo)
// class Demo{}

// let test = new Demo()
// console.log(test)

// 二：装饰方法
// 2-1，readonly
// function readonly(target, name, descriptor){
// 	console.log(name)
// 	descriptor.writable = false
// 	return descriptor
// }
// class Person{
// 	constructor(){
// 		this.first = "a"
// 		this.last = "b"
// 	}
// 	@readonly
// 	name(){
// 		return `${this.first}${this.last}`
// 	}
// }

// let p = new Person()
// console.log(p.name())
// // 
// p.name = function(){
// 	return 8888
// }
// console.log(p.name())



// 2-2 打印log 
// function log(target, name, descriptor){
// 	let oldValue = descriptor.value
// 	descriptor.value = function(){
// 		console.log(`calling ${name} width`, arguments)
// 		return oldValue.apply(this, arguments)
// 	}
// 	return descriptor
// }
// class Math{
// 	@log
// 	add(a, b){
// 		return a + b
// 	}
// }

// let test = new Math()

// test.add(1,2)

// 三, 第三方类库 core-decorators  npm install core-decorators --save

import { readonly } from 'core-decorators'
// class Person{
// 	@readonly
// 	name(){
// 		console.log('zhangsan')
// 	}
// }
// let p = new Person()
// p.name()
// // 报错
// p.name = function(){
// 	console.log(888)
// }
import { deprecate } from 'core-decorators'
 class Person{
 	@deprecate('此api下版本将废除',{url: 'www.baidu.com'})
 	name(){
 		return 'zhangsan '
 	}

 }
 let p = new Person()
 p.name()












 

