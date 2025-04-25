"use strict";

// TODO: not a priority but idk if this will persist when going to different pages, might wanna set it up if necessary
let node = document.createElement("link");
node.rel = "manifest";
node.href = "http://localhost:8080/manifest.json";

document.head.appendChild(node);
