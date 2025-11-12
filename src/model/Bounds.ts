import { Point } from "./Point"
import { Size } from "./Size"

export class Bounds {
	get left(): number {
		return this.leftTop.x
	}
	get right(): number {
		return this.leftTop.x + this.size.width
	}
	get top(): number {
		return this.leftTop.y
	}
	get bottom(): number {
		return this.leftTop.y + this.size.height
	}
	constructor(readonly leftTop: Point, readonly size: Size) {}
	inside(point: Point): boolean {
		return point.x >= this.left && point.y >= this.top && point.x < this.right && point.y < this.bottom
	}
}
export namespace Bounds {}
