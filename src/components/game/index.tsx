import { Component, h, Host, State } from "@stencil/core"
import { model } from "../../model"

@Component({
	tag: "aron-game",
	styleUrl: "style.css",
	scoped: true,
})
export class AronGame {
	@State() game: model.Game = model.Game.create("level0")
	render() {
		return (
			<Host>
				<aron-layer layer="ground" map={this.game.map}></aron-layer>
				<aron-hero hero={this.game.hero}></aron-hero>
				<aron-layer layer="canopy" map={this.game.map}></aron-layer>
			</Host>
		)
	}
}
