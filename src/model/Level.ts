import { isly } from "isly"
import { Game } from "./Game"
import { Hero } from "./Hero"
import { Item } from "./Item"
import { Map } from "./Map"
import { Point } from "./Point"
import { Tile } from "./Tile"

export interface Level {
	start: { x: number; y: number }
	map: Tile.Type[][]
	items: { type: string; position: { x: number; y: number } }[]
}
export namespace Level {
	export const { is, flawed, type } = isly
		.object<Level>({
			start: Point.type,
			map: Tile.Type.type.array().array(),
			items: Item.type.array(),
		})
		.bind()
	export function load(data: Level): Game {
		const items = data.items.map(item => new Item(item.type as Item.Type, new Point(item.position.x, item.position.y)))
		const map = new Map(data.map, items)
		return new Game(map, new Hero(new Point(data.start.x, data.start.y)))
	}
}
