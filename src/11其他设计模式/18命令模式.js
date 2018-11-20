// 执行命令时候， 发布者和执行者分开   中间加入面向对象作为中转站

// 接受者
class Receiver{
	exec(){
		console.log('执行')
	}
}

// 命令着

class Command{
	constructor(receiver) {
		this.receiver = receiver
	}

	cmd() {
		console.log('执行命令')
		this.receiver.exec()
	}
}

// 触发者

class Invoker{
	constructor(command){
		this.command = command
	}
	invoker(){
		console.log('开始')
		this.command.cmd()
	}
}

let soldier = new Receiver()
// 小号手
let trumpeter = new Command(soldier)
// 将军
let general = new Invoker(trumpeter)

general.invoker()




// 应用场景
// 网页富文本编辑器操作 浏览器封装了一个命令对象
	// document.execCommand('bold')
	// document.







