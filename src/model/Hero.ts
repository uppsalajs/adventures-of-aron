import { Direction } from "./Direction"
import { Point } from "./Point"

export class Hero {
	constructor(readonly position: Point, readonly facing: Direction = "down") {}
	move(direction: Direction): Hero {
		return new Hero(this.position.move(direction), direction)
	}
	face(direction: Direction): Hero {
		return new Hero(this.position, direction)
	}
}
export namespace Hero {}
