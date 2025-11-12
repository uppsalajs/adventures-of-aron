import { Point } from "./Point"
import { Size } from "./Size"
import { Tile } from "./Tile"

export class Map {
	readonly size: Size
	private readonly tiles: Tile[][]
	constructor(data: Tile.Type[][]) {
		this.tiles = data.map((row, y) => row.map((type, x) => Tile.create(type, new Point(x, y))))
		this.size = new Size(this.tiles[0].length, this.tiles.length)
	}
	get(position: Point): Tile {
		return this.tiles[position.y][position.x] ?? new Tile.Forest(position)
	}
	*layer(layer: Tile.Layer): Generator<Tile> {
		for (const tile of this.tiles.flat())
			if (tile.layer == layer)
				yield tile
	}
}
export namespace Map {}
