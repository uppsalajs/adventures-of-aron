import "./Gravel"
import { Point } from "../Point"
import { Base } from "./Base"
import { Forest as _Forest } from "./Forest"
import { Layer as _Layer } from "./Layer"
import { Type as _Type } from "./Type"

export type Tile = Base

export namespace Tile {
	export import Forest = _Forest
	export import Layer = _Layer
	export import Type = _Type
	export function create(type: Type, position: Point): Tile {
		return Base.create(type, position) ?? new Forest(position)
	}
}
