import { Component, h, Host, Prop } from "@stencil/core"
import { model } from "../../model/index"

@Component({
	tag: "aron-item",
	styleUrl: "style.css",
	scoped: true,
})
export class AronItem {
	@Prop() item: model.Item
	render() {
		return (
			<Host
				style={{
					left: (this.item.position.x * 64).toString() + "px",
					top: (this.item.position.y * 64).toString() + "px",
				}}>
				<img src={`/assets/items/${this.item.type}.svg`} />
			</Host>
		)
	}
}
