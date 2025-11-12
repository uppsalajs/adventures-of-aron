import { isly } from "isly"
import { Game } from "./Game"
import { Hero } from "./Hero"
import { Map } from "./Map"
import { Point } from "./Point"
import { Tile } from "./Tile"

export interface Level {
	start: { x: number; y: number }
	map: Tile.Type[][]
}
export namespace Level {
	export const { is, flawed, type } = isly
		.object<Level>({
			start: Point.type,
			map: Tile.Type.type.array().array(),
		})
		.bind()
	export function load(data: Level): Game {
		const map = new Map(data.map)
		return new Game(map, new Hero(new Point(data.start.x, data.start.y)))
	}
}
