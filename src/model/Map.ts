import { Point } from "./Point"
import { Tile } from "./Tile"

export class Map {
	readonly size: { readonly width: number; readonly height: number }
	private readonly tiles: readonly Tile[][]
	constructor(data: Tile.Type[][]) {
		this.tiles = data.map((row, y) => row.map((type, x) => Tile.load(type, new Point(x, y), this)))
		this.size = { width: this.tiles[0].length, height: this.tiles.length }
	}
	get(position: Point): Tile {
		return this.tiles[position.y][position.x] ?? new Tile.Forest(position, this)
	}
	*layer(layer: Tile.Layer): Generator<Tile | undefined> {
		for (const tile of this.tiles.flat())
			if (tile.layer == layer)
				yield tile
	}
}
export namespace Map {}
