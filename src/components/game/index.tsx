import { Component, h, Host, State } from "@stencil/core"
import { model } from "../../model"

@Component({
	tag: "aron-game",
	styleUrl: "style.css",
	scoped: true,
})
export class AronGame {
	@State() game: model.Game = model.Game.create("forest")
	render() {
		return (
			<Host>
				<aron-layer layer="canopy" map={this.game.map}></aron-layer>
			</Host>
		)
	}
}
