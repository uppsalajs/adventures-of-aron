import { Direction } from "./Direction"
import { Hero } from "./Hero"
import { Level } from "./Level"
import { Map } from "./Map"

export class Game {
	constructor(readonly map: Map, readonly hero: Hero) {}

	move(direction: Direction): Game {
		let hero = this.hero.move(direction)
		const tile = this.map.get(hero.position)
		if (!tile.walkable)
			hero = this.hero.face(direction)
		const map = tile.walkable && tile.item ? this.map.set(tile.collect()) : this.map
		return new Game(map, hero)
	}
	static async fetch(url: string): Promise<Game | undefined> {
		const level = await (await fetch(url)).json()
		return Level.is(level) ? Level.load(level) : undefined
	}
}
export namespace Game {}
