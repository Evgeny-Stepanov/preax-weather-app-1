import { metricData } from "../base/metric-data.js";
import { card } from "../components/details-card/card.js";

export const details = () => {
  const detailsCardsElement = document.querySelector(".details__cards");

  metricData.forEach((data) => {
    detailsCardsElement.append(card(data));
  });
};
