import socials from "./socials.json"
import templateSocials from "./socials-template.hbs"

import bloggers from "./media.json"
import templateBloggers from "./bloggers-template.hbs"
import { log } from "handlebars/runtime";


const listEl = document.querySelector(".list__socials");
const listRef = document.querySelector(".list__bloggers");

listEl.innerHTML = templateSocials({socials});
listRef.innerHTML = templateBloggers({bloggers});
