"use strict";

// Synthetic teaching fixture. Site values are inserted only after JavaScript runs.
const sites = [
  { id: "ST-101", name: "Old Town", zone: "North", installed: 6, available: 0, status: "Temporarily unavailable" },
  { id: "ST-102", name: "University", zone: "North", installed: 4, available: 3, status: "Operational" },
  { id: "ST-103", name: "Central Station", zone: "North", installed: 8, available: 1, status: "Operational" },
  { id: "ST-104", name: "City Centre", zone: "North", installed: 4, available: 1, status: "Operational" },
  { id: "ST-105", name: "Hospital", zone: "North", installed: 6, available: 0, status: "Planned maintenance" },
  { id: "ST-106", name: "Riverside Park", zone: "North", installed: 4, available: 4, status: "Operational" },
  { id: "ST-201", name: "Harbour", zone: "South", installed: 6, available: 2, status: "Operational" },
  { id: "ST-202", name: "South Plaza", zone: "South", installed: 4, available: 0, status: "Planned maintenance" },
  { id: "ST-203", name: "South Station", zone: "South", installed: 8, available: 5, status: "Operational" },
  { id: "ST-204", name: "Market", zone: "South", installed: 4, available: 3, status: "Operational" },
  { id: "ST-205", name: "Campus", zone: "South", installed: 6, available: 2, status: "Operational" },
  { id: "ST-206", name: "Museum", zone: "South", installed: 4, available: 4, status: "Operational" }
];

function renderSites() {
  for (const site of sites) {
    const root = document.querySelector(site.zone === "North" ? "#north-sites .grid" : "#south-sites .grid");
    const card = document.createElement("article");
    card.className = `site-card ${site.status === "Planned maintenance" ? "maintenance" : site.status === "Temporarily unavailable" ? "unavailable" : ""}`;
    card.dataset.siteId = site.id;
    card.innerHTML = `<h3>${site.name}</h3><p class="site-code">${site.id} · ${site.zone}</p><p>Installed connectors: <strong class="installed">${site.installed}</strong></p><p>Available connectors: <strong class="available">${site.available}</strong></p><p>Status: <span class="status">${site.status}</span></p>`;
    root.appendChild(card);
  }
  document.getElementById("site-count").textContent = String(sites.length);
  document.getElementById("connector-count").textContent = String(sites.reduce((n, site) => n + site.installed, 0));
  document.getElementById("available-count").textContent = String(sites.reduce((n, site) => n + site.available, 0));
  document.querySelector("#site-list .loading").remove();
  document.getElementById("site-list").dataset.ready = "true";
}

window.setTimeout(renderSites, 850);
