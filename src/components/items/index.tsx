import { Component, h, Host, Prop } from "@stencil/core"
import { model } from "../../model/index"

@Component({
	tag: "aron-items",
	styleUrl: "style.css",
	scoped: true,
})
export class AronItems {
	@Prop() map: model.Map
	render() {
		return (
			<Host>
				{[...this.map.items()].map(item => (
					<aron-item item={item}></aron-item>
				))}
			</Host>
		)
	}
}
