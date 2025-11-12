import { Component, h, Host } from "@stencil/core"

@Component({
	tag: "aron-game",
	styleUrl: "style.css",
	scoped: true,
})
export class AronGame {
	render() {
		return <Host>Adventure of Aron</Host>
	}
}
