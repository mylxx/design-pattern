// 概念 不同策略分开处理

// 避免出现大量 if...else 或者 switch..case

// class User{
// 	constructor(type){
// 		this.type = type
// 	}
// 	buy() {
// 		if (this.type == 'ordinary') {
// 			console.log('普通用户购买')
// 		} else if(this.type == 'member'){
// 			console.log('会员用户购买')
// 		} else if(this.type == 'vip'){
// 			console.log('vip用户购买')
// 		}
// 	}
// }

// let u1 = new User('ordinary')
// u1.buy()


class OrdinaryUser {
	buy(){
		console.log('普通用户购买')
	}
}

class MemberUser{
	buy(){
		console.log('会员户购买')
	}
}
class VipUser{
	buy(){
		console.log('vip购买')
	}
}

let u1 = new OrdinaryUser()
u1.buy()








