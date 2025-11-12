import { Base } from "./Base"

export class Forest extends Base {
	readonly type = "forest" as const
	readonly layer = "canopy" as const
	readonly walkable = false
}
Base.register("forest", Forest)
export namespace Forest {}
