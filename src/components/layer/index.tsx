import { Component, h, Host, Prop } from "@stencil/core"
import { model } from "../../model/index"

@Component({
	tag: "aron-layer",
	styleUrl: "style.css",
	scoped: true,
})
export class AronLayer {
	@Prop() layer: model.Tile.Layer
	@Prop() map: model.Map
	render() {
		return (
			<Host>
				{[...this.map.layer(this.layer)].map(tile => (
					<aron-tile tile={tile}></aron-tile>
				))}
			</Host>
		)
	}
}
