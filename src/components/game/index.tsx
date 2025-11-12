import { Component, h, Host, Listen, State } from "@stencil/core"
import { model } from "../../model"

@Component({
	tag: "aron-game",
	styleUrl: "style.css",
	scoped: true,
})
export class AronGame {
	@State() game: model.Game = model.Game.create("level0")
	@Listen("keydown", { target: "window" })
	onKeyDown(event: KeyboardEvent) {
		let direction: model.Direction | undefined
		switch (event.key) {
			case "ArrowLeft":
				direction = "left"
				break
			case "ArrowRight":
				direction = "right"
				break
			case "ArrowUp":
				direction = "up"
				break
			case "ArrowDown":
				direction = "down"
				break
		}
		if (direction)
			this.game = this.game.move(direction)
	}
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
