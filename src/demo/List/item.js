
import $ from 'jquery'
import getCart from '../ShoppingCart/GetCart.js'
// 
import StateMachine from 'javascript-state-machine'

import {log} from '../util/log.js'

export default class Item {
	constructor(list, data){
		this.list = list
		this.data = data
		this.$el = $('<div>')
		this.cart = getCart()
	}

	initContent() {
		let $el = this.$el
		let data = this.data

		$el.append($(`<p>名称：${data.name}</p>`))
		$el.append($(`<p>价格：${data.price}</p>`))

	}

	initBtn() {
		let $el = this.$el
		let $btn = $('<button>')
		let _this = this
		let fsm = new StateMachine({
			init: '加入购物车',
			transitions: [
			{
				name: 'addToCart',
				from:'加入购物车',
				to: '从购物车删除'
			},{
				name: 'deleteFromCart',
				from: '从购物车删除',
				to:'加入购物车'

			}],
			methods: {
				// 添加到购物车
				onAddToCart: function(){
					_this.addToCartHandle()
					updateText()
				},
				// 从购物车移除

				onDeleteFromCart: function(){
					_this.deleteFromCartHandle()
					updateText()

				}
			}
		})

		function updateText(){
			$btn.text(fsm.state)
		}
		updateText()

		$btn.click(() => {
			// 
			// 从购物车移除
			if(fsm.is('加入购物车')){
				fsm.addToCart()
			}else{
				fsm.deleteFromCart()
			}
		})

		$el.append($btn)


	}
	// 添加到购物车
	@log('add')
	addToCartHandle(){
		this.cart.add(this.data)

	}

	// 从购物车删除
	@log('del')
	deleteFromCartHandle(){
		this.cart.del(this.data.id)

	}

	render(){
		this.list.$el.append(this.$el)
	}

	init(){
		this.initContent()
		this.initBtn()
		this.render()

	}
}