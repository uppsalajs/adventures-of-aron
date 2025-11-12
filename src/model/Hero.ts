import { Direction } from "./Direction"
import { Point } from "./Point"

export class Hero {
	constructor(public position: Point) {}
	move(direction: Direction): Hero {
		return new Hero(this.position.move(direction))
	}
}
export namespace Hero {}
