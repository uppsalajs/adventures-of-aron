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
		return (
			<Host
				style={{
					left: (this.hero.position.x * 64).toString() + "px",
					top: (this.hero.position.y * 64).toString() + "px",
				}}>
				<img src={`/assets/hero/${this.hero.facing}.svg`} />
			</Host>
		)
	}
}
