import type { Map } from "../Map"
import { Point } from "../Point"
import { Layer } from "./Layer"
import { Type } from "./Type"

export abstract class Base {
	abstract readonly type: Type
	abstract readonly layer: Layer
	abstract walkable: boolean
	constructor(public position: Point, public map: Map) {}
}

export const types: { [type in Type]?: new (position: Point, map: Map) => Base } = {}
export function register(type: Type, create: new (position: Point, map: Map) => Base) {
	types[type] = create
}
