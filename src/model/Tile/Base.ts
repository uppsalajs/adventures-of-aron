import { Point } from "../Point"
import { Layer } from "./Layer"
import { Type } from "./Type"

export abstract class Base {
	abstract readonly type: Type
	abstract readonly layer: Layer
	abstract readonly walkable: boolean
	constructor(readonly position: Point) {}
}
export namespace Base {
	const types: { [type in Type]?: new (position: Point) => Base } = {}
	export function create(type: Type, position: Point): Base | undefined {
		const c = types[type]
		return c && new c(position)
	}
	export function register(type: Type, create: new (position: Point) => Base) {
		types[type] = create
	}
}
