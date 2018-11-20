// 有限状态机
// 有限个状态 以及在这些状态之间的变化
// 使用开源lib : javascript-state-machine 写一个简单的Promise


import StateMachine from 'javascript-state-machine'
import $ from 'jquery'

// 初始化状态机模型

let fsm = new StateMachine({
	init: '收藏',
	transitions: [
	{
		name: 'doStore',
		from: '收藏',
		to: '取消收藏'

	},{
		name: 'deleteStore',
		from: '取消收藏',
		to: '收藏'

	}],

	methods: {
		// 监听收藏
		onDoStore: function(){
			alert('收藏成功')
			updateText()
		},

		onDeleteStore: function () {
			alert('取消收藏')	
			updateText()
		}
	}

})

var btn = $('#btn1')
btn.click(function(){
	if(fsm.is('收藏')){
		fsm.doStore()
	}else{
		fsm.deleteStore()
	}
})

function updateText(){
	btn.text(fsm.state)
}
updateText()
