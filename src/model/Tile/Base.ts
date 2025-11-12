import { Item } from "../Item"
import type { Map } from "../Map"
import { Point } from "../Point"
import { Layer } from "./Layer"
import { Type } from "./Type"

export abstract class Base {
	abstract readonly type: Type
	abstract readonly layer: Layer
	abstract walkable: boolean
	constructor(public readonly position: Point, public readonly map: Map, public readonly item?: Item) {}
	place(item: Item): Base {
		return new types[this.type]!(this.position, this.map, item)
	}
	collect(): Base {
		return new types[this.type]!(this.position, this.map) as Base
	}
}

export const types: { [type in Type]?: new (position: Point, map: Map, item?: Item) => Base } = {}
export function register(type: Type, create: new (position: Point, map: Map, item?: Item) => Base) {
	types[type] = create
}
