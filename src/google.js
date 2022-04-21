function ready(fn) {
  if (document.readyState != "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

const IGNORE_LIST = ["www.w3schools.com"];

function hideLinksByDomains(domains = IGNORE_LIST) {
  domains.forEach((d) => {
    const ignoredLinks = document.querySelectorAll(`a[href*="${d}"]`);
    if (ignoredLinks) {
      ignoredLinks.forEach((l) => {
        const container = l.parentNode.parentNode.parentNode;
        container.style.opacity = "0.1";
      });
    }
  });
}

ready(hideLinksByDomains);
