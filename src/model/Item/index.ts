import { isly } from "isly"
import { Point } from "../Point"
import { Type as _Type } from "./Type"

export class Item {
	constructor(readonly type: Item.Type, readonly position: Point) {}
}
export namespace Item {
	export import Type = _Type
	export const { is, flawed, type } = isly
		.object<{ type: Item.Type; position: { x: number; y: number } }>({
			type: Type.type,
			position: Point.type,
		})
		.bind()
}
