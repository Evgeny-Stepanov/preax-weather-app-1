import { overviewData } from "../base/overview-data.js";

export const overview = () => {
  const overviewElement = document.querySelector(".overview");

  const overviewLocationElement = overviewElement.querySelector(
    ".overview__location",
  );
  const overviewDatetimeElement = overviewElement.querySelector("time");
  const overviewDateElement =
    overviewDatetimeElement.querySelector(".overview__date");
  const overviewTimeElement =
    overviewDatetimeElement.querySelector(".overview__time");
  const overviewTemperatureElement = overviewElement.querySelector(
    ".overview__temperature",
  );
  const overviewConditionElement = overviewElement.querySelector(
    ".overview__condition",
  );
  const overviewFeelingElement =
    overviewElement.querySelector(".overview__feeling");

  overviewLocationElement.textContent = overviewData.location || "Местность";
  overviewDatetimeElement.setAttribute(
    "datetime",
    overviewData.datetimeAttr || "",
  );
  overviewDateElement.textContent = overviewData.date || "Дата";
  overviewTimeElement.textContent = overviewData.time || "00:00";
  overviewTemperatureElement.textContent = overviewData.temperature || "0°";
  overviewConditionElement.textContent =
    overviewData.conditionText || "Погодные условия";
  overviewConditionElement.style.setProperty(
    "--icon-url",
    overviewData.conditionIconUrl ||
      "url(../../public/icons/weather/day/broken-clouds.png)",
  );
  overviewFeelingElement.textContent =
    overviewData.feeling || "Ощущается как °";
};
