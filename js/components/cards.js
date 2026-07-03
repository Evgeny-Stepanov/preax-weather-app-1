import { meteoData } from "../base/meteo-data.js";
import { cardComponent } from "./card.js";

export const cardsComponent = () => {
  const weatherSectionElement = document.querySelector(".weather");

  const cardsListElement = document.createElement("ul");
  cardsListElement.classList.add("weather__cards", "cards");

  console.log(cardsListElement);

  meteoData.forEach((data) => {
    const cardElement = document.createElement("li");
    cardElement.classList.add("card");
    cardElement.innerHTML = cardComponent(data);
    cardsListElement.append(cardElement);
  });

  weatherSectionElement.append(cardsListElement);
};
