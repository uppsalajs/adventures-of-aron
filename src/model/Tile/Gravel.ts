import { Base } from "./Base"

export class Gravel extends Base {
	readonly type = "gravel"
	readonly layer = "ground" as const
	readonly walkable = true
}
Base.register("gravel", Gravel)

export namespace Gravel {}
