import { isly } from "isly"

export type Type = typeof Type.values[number]
export namespace Type {
	export const values = ["coin"] as const
	export const { is, flawed, type } = isly.string<Type>("value", values).bind()
}
