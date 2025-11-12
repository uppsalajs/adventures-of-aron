import { Component, h, Host, Prop } from "@stencil/core"
import { model } from "../../model/index"

@Component({
	tag: "aron-hero",
	styleUrl: "style.css",
	scoped: true,
})
export class AronHero {
	@Prop() hero: model.Hero
	render() {
		return <Host></Host>
	}
}
