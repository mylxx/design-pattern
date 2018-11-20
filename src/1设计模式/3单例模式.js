// 单例模式
// 1登录框
// 2购物车

class SingleObject{
	login(){
		console.log('login')
	}
}
SingleObject.getInstance = (function(){
	let instance
	return function(){
		if(!instance){
			instance = new SingleObject()
		}
		return instance
	}

})()

// 
let obj1 = SingleObject.getInstance()
obj1.login()

let obj2 =SingleObject.getInstance()
obj1.login()
 console.log(obj1 === obj2)

 // 无法控制的错误用法
 let obj3 = new SingleObject()
 obj3.login()
 console.log(obj1 === obj3)


 // 1 jQuery 只有一个单例
 // 2 模拟登录框
 // 3 vuex 和 redux 中的 store
 
// 1
 class LoginForm {
	constructor() {
		this.state = 'hide'
	}
	show() {
		if (this.state === 'show') {
			alert('已经显示')
		}
		this.state = "show"
		console.log('登录框显示成功')

	}
	hide() {
		if (this.state === 'hide') {
			alert('已经隐藏')
		}
		this.state = "hide"
		console.log('登录框隐藏成功')
	}

}

LoginForm.getInstance = (function(){
	let instance
	return function(){
		if (!instance){
			instance = new LoginForm()
		}
		return instance
	}
})()
// 
let login1 = LoginForm.getInstance()
login1.show()
let login2 = LoginForm.getInstance()
login2.hide()

console.log(login1 === login2)

