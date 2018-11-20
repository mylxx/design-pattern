import $ from 'jquery'
import CreateItem from './CreateItem.js'
import {GET_LIST} from '../config/config.js'

export default class List{
	constructor(app) {
		this.app = app
		this.$el = $('<div>')
	}

	// 获取数据
	loadData() {
		return fetch(GET_LIST).then(res => {
			return res.json()
		})

	}

	// 生成列表
	initItemList(data){
		// data.map(itemData => {
		// 	// 创建一个item 然后init
		// 	let item = CreateItem(this, itemData)
		// 	item.init()
		// 	return item
		// })
		data.forEach(itemData => {
			// 创建一个item 然后init
			// 增加 CreateItem.js 工厂模式
			let item = CreateItem(this, itemData)
			item.init()
		})

	}

	// 渲染
	render() {
		this.app.$el.append(this.$el)
	}

	init() {
		this.loadData().then(data => {
			this.initItemList(data)
		}).then(() => {
			this.render()
		})

	}

}