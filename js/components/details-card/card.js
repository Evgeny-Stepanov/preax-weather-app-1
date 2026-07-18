import { getWindIconRotation } from "./get-wind-icon-rotation.js";
import { metric } from "./metric.js";

export const card = (data) => {
  const {
    title,
    iconPath,
    value,
    unit,
    rangeValue,
    text,
    leftText,
    rightText,
  } = data;

  const limitedRangeValue = Math.min(100, Math.max(0, rangeValue));

  const cardTemplate = document.querySelector("#card-template");
  const cardElement = cardTemplate.content.cloneNode(true);

  cardElement.querySelector(".card__title").textContent = title;

  const cardIconElement = cardElement.querySelector("img");
  cardIconElement.src = iconPath;
  const cardIconAltText = title === "Сила ветра" ? "Направление ветра" : title;
  cardIconElement.alt = cardIconAltText;
  if (title === "Сила ветра") {
    cardIconElement.style.setProperty("--rotate", getWindIconRotation(text));
  }

  const cardMetricElement = cardElement.querySelector(".card__metric");
  metric(cardMetricElement, title, value, unit);

  const cardRangeElement = cardElement.querySelector(".card__range");
  if (title === "Влажность" || title === "Видимость" || title === "Давление") {
    cardRangeElement.style.setProperty("--progress", limitedRangeValue);
  } else {
    cardRangeElement.remove();
  }
  if (title === "Давление") {
    cardRangeElement.classList.add("card__range--dark");
  }

  const cardTextElement = cardElement.querySelector(".card__text");
  if (title === "Влажность") {
    cardTextElement.classList.add("card__text--long");
    cardTextElement.querySelector(".card__word--left").textContent = leftText;
    cardTextElement.querySelector(".card__word--right").textContent = rightText;
  } else {
    cardTextElement.querySelector(".card__word--left").remove();
    cardTextElement.querySelector(".card__word--right").remove();
    cardTextElement.textContent = text;
  }

  return cardElement;
};
