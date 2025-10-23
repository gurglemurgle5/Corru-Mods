"use strict";

const manifest = {
  name: "corru.observer",
  icons: [
    {
      src: "https://corru.gurglemurgle.dev/fav192.png",
      type: "image/png",
      sizes: "192x192"
    },
    {
      src: "https://corru.gurglemurgle.dev/fav512.png",
      type: "image/png",
      sizes: "512x512"
    }
  ],
  "start_url": "https://corru.observer",
  "display": "fullscreen",
  "display_override": [
    "fullscreen",
    "standalone",
    "minimal-ui",
    "browser"
  ],
  "screenshots": [
    {
      "src": "https://corru.observer/img/socials/intro.gif",
      "sizes": "600x400",
      "type": "image/gif",
      "form_factor": "wide"
    }
  ]
};

let start_url = window.location.origin;
// idk if there's a good way to automatically detect the home page, so just i'm just hardcoding it for this specific case
if (start_url == "https://crxb.cc") {
  start_url = "https://crxb.cc/corruskivi/";
  manifest.name = "corruskivi"
}

manifest.start_url = start_url;

let node = document.createElement("link");
node.rel = "manifest";
node.href = "data:application/json," + encodeURIComponent(JSON.stringify(manifest));

document.head.appendChild(node);
