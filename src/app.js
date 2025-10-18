import socials from "./socials.json"
import templateSocials from "./socials-template.hbs"

import bloggers from "./media.json"
import templateBloggers from "./bloggers-template.hbs"

const listEl = document.querySelector(".list__socials");
const listRef = document.querySelector(".list__bloggers");

// Социальные сети
listEl.innerHTML = templateSocials({socials});

// Блогеры
listRef.innerHTML = templateBloggers({bloggers});
