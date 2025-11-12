export type Direction = typeof Direction.values[number]
export namespace Direction {
	export const values = ["up", "down", "left", "right"] as const
}
