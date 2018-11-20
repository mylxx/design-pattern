// 概念
// 模板方法模式
// class Action{
// 	handle(){
// 		return {
// 			a: this.handle1,
// 			b: this.handle2,
// 			c: this.handle3
// 		}
		
// 	}
// 	handle1(){
// 		console.log(1)
// 	}
// 	handle2(){
// 		console.log(2)
// 	}
// 	handle3(){
// 		console.log(3)
// 	}
// }
// let s = new Action()
// console.log(s.handle())

// 二 职责链模式
  // 一步操作可能分为多个职责角色来完成
  // 把这些角色都分开，然后用一个链串起来 将发起者和各个处理着进行隔离

  class Action{
  	constructor(name){
  		this.name = name
  		this.nextAction = null
  	}
  	 setNextAction(action) {
  	 	this.nextAction = action
  	 }

  	 handle(){
  	 	console.log(`${this.name} 审批`)

  	 	if(this.nextAction != null){
  	 		this.nextAction.handle()
  	 	}
  	 }
  }

  let a1 = new Action('组长')
  let a2 = new Action('经理')
  let a3 = new Action('总监')

  a1.setNextAction(a2)
  a2.setNextAction(a3)
  a1.handle()


// 职责链模式和业务结合比较多一点 （jq链式操作、Premise）








