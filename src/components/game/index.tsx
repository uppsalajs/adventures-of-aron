import { Component, Fragment, h, Host, Listen, State } from "@stencil/core"
import { model } from "../../model"

@Component({
	tag: "aron-game",
	styleUrl: "style.css",
	scoped: true,
})
export class AronGame {
	@State() game?: model.Game
	@Listen("keydown", { target: "window" })
	handleKeydown(event: KeyboardEvent) {
		if (this.game) {
			const direction =
				event.key.startsWith("Arrow") && (event.key.substring(5).toLowerCase() as model.Direction | undefined)
			if (direction)
				this.game = this.game.move(direction)
		}
	}
	async componentWillLoad(): Promise<void> {
		this.game = await model.Game.fetch("/assets/levels/level0.json")
	}
	render() {
		return (
			<Host>
				{!this.game ? (
					"Loading..."
				) : (
					<Fragment>
						<aron-layer layer="ground" map={this.game.map} />
						<aron-hero hero={this.game.hero} />
						<aron-layer layer="canopy" map={this.game.map} />
					</Fragment>
				)}
			</Host>
		)
	}
}
