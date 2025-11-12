import { Direction } from "./Direction"
import { Hero } from "./Hero"
import { Level } from "./Level"
import { Map } from "./Map"

export class Game {
	constructor(readonly map: Map, readonly hero: Hero) {}

	move(direction: Direction): Game {
		const hero = this.hero.move(direction)
		const tile = this.map.get(hero.position)
		return tile?.walkable ? new Game(this.map, hero) : this
	}
	static async fetch(url: string): Promise<Game | undefined> {
		const level = await (await fetch(url)).json()
		console.log("Fetched level:", level, Level.flawed(level))
		return Level.is(level) ? Level.load(level) : undefined
	}
}
export namespace Game {}
