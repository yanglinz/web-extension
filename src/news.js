import { onReady } from "./lib/dom";

import "./news.css";

function getArchiveLink(currentLink = document.location.href) {
  // TODO: Get dynamic date url
  return `https://web.archive.org/web/20220429171756/${currentLink}`;
}

function showArchiveLink() {
  const el = document.createElement("div");
  el.className = "InjectedInternetArchiveLink";
  el.innerHTML = `
    <a href="${getArchiveLink()}">${getArchiveLink()}</a>
  `;
  document.body.appendChild(el);
}

onReady(showArchiveLink);
