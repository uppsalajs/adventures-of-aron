import { Direction } from "./Direction"
import { Hero } from "./Hero"
import { Map } from "./Map"
import { Point } from "./Point"

export class Game {
	private constructor(readonly map: Map, readonly hero: Hero) {}

	move(direction: Direction): Game {
		const hero = this.hero.move(direction)
		const tile = this.map.get(hero.position)
		return tile?.walkable ? new Game(this.map, hero) : this
	}
	static create(map: Map): Game {
		return new Game(map, new Hero(new Point(3, 3)))
	}
}
export namespace Game {}
