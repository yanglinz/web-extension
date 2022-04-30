import { onReady } from "./lib/dom";

import "./news.css";

function getArchiveLink(currentLink = document.location.href) {
  const futureDate = "20300101000000";
  return `https://web.archive.org/web/${futureDate}/${currentLink}`;
}

function showArchiveLink() {
  const el = document.createElement("div");
  el.className = "InjectedInternetArchiveLink";
  el.innerHTML = `
    <a href="${getArchiveLink()}">web.archive.org</a>
  `;
  document.body.appendChild(el);
}

onReady(showArchiveLink);
