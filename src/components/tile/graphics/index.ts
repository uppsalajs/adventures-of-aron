import { model } from "../../../model"
import forest from "./forest.svg"
import grass from "./grass.svg"
import gravel from "./gravel.svg"
import rock from "./rock.svg"
import water from "./water.svg"

export const graphics: Record<model.Tile.Type, string> = {
	grass,
	rock,
	water,
	gravel,
	forest,
}
