import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
    IconDefinition,
    IconName,
    findIconDefinition,
    icon,
    library
} from "@fortawesome/fontawesome-svg-core";

import { RPG } from "./rpgawesome";
import { AdmonitionIconDefinition, RPGIconName } from "src/@types";

library.add(fas, faCopy);

export const COPY_BUTTON_ICON = icon(
    findIconDefinition({
        iconName: "copy",
        prefix: "far"
    })
).node[0];

export const WARNING_ICON = icon(
    findIconDefinition({
        iconName: "exclamation-triangle",
        prefix: "fas"
    })
).node[0];

export { IconName };

export const iconNames: AdmonitionIconDefinition[] = [
    ...Object.values(fas).map((i: IconDefinition) => {
        return { name: i.iconName, type: "font-awesome" as "font-awesome" };
    }),
    ...Object.keys(RPG).map((i) => {
        return {
            name: i as RPGIconName,
            type: "rpg" as "rpg"
        };
    })
];

export function getIconType(str: string): "rpg" | "font-awesome" {
    if (RPG[str as RPGIconName]) return "rpg";
    if (findIconDefinition({ iconName: str as IconName, prefix: "fas" }))
        return "font-awesome";
}

export function getIconNode(item: AdmonitionIconDefinition): Element {
    if (item.type === "rpg") {
        if (!RPG[item.name as RPGIconName]) return null;
        const el = createDiv();
        el.innerHTML = RPG[item.name as RPGIconName];
        return el.children[0];
    }
    if (
        !findIconDefinition({
            iconName: item.name as IconName,
            prefix: "fas"
        })
    )
        return null;
    return icon(
        findIconDefinition({
            iconName: item.name as IconName,
            prefix: "fas"
        })
    ).node[0];
}
