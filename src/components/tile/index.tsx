import { Component, h, Host, Prop } from "@stencil/core"
import { model } from "../../model/index"

@Component({
	tag: "aron-tile",
	styleUrl: "style.css",
	scoped: true,
})
export class AronTile {
	@Prop() tile: model.Tile
	render() {
		return (
			<Host>
				<img src={`/assets/tiles/${this.tile.type}.svg`} alt="" />
			</Host>
		)
	}
}
