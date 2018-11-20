

class car{
	constructor(num){
		this.num = num
	}
}

class Camera {
	shot(car) {
		return {
			num: car.num,
			inTime: Date.now()
		}
	}
}
class Screen {
	show(car, inTime) {
		console.log('车牌号', car.num)
		console.log('停车时间', Date.now() - inTime)
	}
}

// 停车场
class Park {
	constructor(floors) {
		this.floors = floors || []
		this.camera = new Camera()
		this.Screen = new Screen()
		this.carList = {} //存储摄像头返回的车辆信息
	}
	in(car) {
		// 通过摄像头获取信息
		const info = this.camera.shot(car)
		// 停到某个车位
		const i = parseInt(Math.random() * 100 % 100)
		const place = this.floors[0].places[i]
		info.place = place

		this.carList[car.num] = info


	}
	out(car) {
		const info = this.carList[car.num]
		const place = info.place
		place.out()
		this.screen.show(car, info.inTime)
		delete this.carList[car.num]

	}
	emptyNum(){
		return this.floors.map(floor => {
			return `${floor.index + 1}层还有${floor.emptyPlaceNum()}个空位`
		}).join('\n')
	}
}
// 层
class Floor {
	constructor(index, places) {
		this.index = index;
		this.places = places || []
	}

	emptyPlaceNum(){
		let num = 0
		this.places.forEach(p => {
			if (p.empty){
				num = num + 1
			}
		})

		return num

	}
}

// 车位
class Place {
	constructor() {
		this.empty = true
	}
	in(){
		this.empty = false
	}
	out(){
		this.empty = true
	}
}


console.log(1)