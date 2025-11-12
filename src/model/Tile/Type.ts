export type Type = typeof Type.values[number]

export namespace Type {
	export const values = ["gravel", "forest"] as const
}
