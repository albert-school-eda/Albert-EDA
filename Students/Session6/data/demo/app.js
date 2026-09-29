"use strict";

// Synthetic teaching fixture. The page's initial HTML has no standard-offer rows.
const offers = [
  { city: "Madrid", plan: "Basic", monthlyEUR: 19.90 },
  { city: "Madrid", plan: "Plus", monthlyEUR: 29.90 },
  { city: "Madrid", plan: "Premium", monthlyEUR: 44.90 },
  { city: "Barcelona", plan: "Basic", monthlyEUR: 22.90 },
  { city: "Barcelona", plan: "Plus", monthlyEUR: 32.90 },
  { city: "Barcelona", plan: "Premium", monthlyEUR: 49.90 }
];

function renderOffers() {
  const root = document.getElementById("price-cards");
  for (const offer of offers) {
    const card = document.createElement("article");
    card.className = "offer-card";
    card.dataset.city = offer.city;
    card.dataset.plan = offer.plan;
    card.innerHTML = `<h3>${offer.city} · ${offer.plan}</h3><p class="price">€${offer.monthlyEUR.toFixed(2)} <small>/ month</small></p>`;
    root.appendChild(card);
  }
  document.querySelector("#standard-prices .loading").remove();
  document.getElementById("standard-prices").dataset.ready = "true";
}

window.setTimeout(renderOffers, 650);
