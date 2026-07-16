import { pluralizeIntl } from "../../base/utils.js";

export const metric = (cardMetricElement, title, value, unit) => {
  const valueElement = cardMetricElement.querySelector(".card__value");
  const unitElement = cardMetricElement.querySelector("[aria-hidden='true']");
  const hiddenElement = cardMetricElement.querySelector(".visually-hidden");
  const timeElement = cardMetricElement.querySelector("time");

  switch (title) {
    case "Влажность": {
      const forms = {
        one: "процент",
        few: "процента",
        many: "процентов",
      };
      valueElement.textContent = value;
      unitElement.textContent = unit;
      hiddenElement.textContent = pluralizeIntl(value, forms);
      timeElement.remove();
      break;
    }

    case "Давление": {
      const forms = {
        one: "миллиметр",
        few: "миллиметра",
        many: "миллиметров",
      };

      valueElement.textContent = value;
      unitElement.remove();
      hiddenElement.textContent = `${pluralizeIntl(value, forms)} ртутного столба`;
      timeElement.remove();
      break;
    }

    case "Видимость": {
      const forms = {
        one: "километр",
        few: "километра",
        many: "километров",
      };

      valueElement.textContent = value;
      unitElement.textContent = unit;
      hiddenElement.textContent = pluralizeIntl(value, forms);
      timeElement.remove();
      break;
    }

    case "Рассвет":
    case "Закат":
      valueElement.remove();
      unitElement.remove();
      hiddenElement.remove();
      timeElement.textContent = value;

      const [hours, minutes] = value.split(":");
      const datetimeValue = `${hours.padStart(2, "0")}:${minutes}`;
      timeElement.setAttribute("datetime", datetimeValue);
      break;

    case "Сила ветра": {
      const forms = {
        one: "метр",
        few: "метра",
        many: "метров",
      };

      valueElement.textContent = value;
      unitElement.textContent = unit;
      hiddenElement.textContent = `${pluralizeIntl(value, forms)} в секунду`;
      timeElement.remove();
      break;
    }
  }
};
