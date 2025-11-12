import "./Gravel"
import type { Map } from "../Map"
import { Point } from "../Point"
import { Base, types } from "./Base"
import { Forest as _Forest } from "./Forest"
import { Layer as _Layer } from "./Layer"
import { Type as _Type } from "./Type"

export type Tile = Base

export namespace Tile {
	export import Forest = _Forest
	export import Type = _Type
	export import Layer = _Layer

	export function load(type: Type, position: Point, map: Map): Tile {
		return new (types[type] ?? Forest)(position, map)
	}
}
