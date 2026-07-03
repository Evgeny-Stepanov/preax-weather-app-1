import { METEO_DATA_ICON_FOLDER } from "./constants.js";

export const meteoData = [
  {
    title: "Влажность",
    iconPath: `${METEO_DATA_ICON_FOLDER}/humidity.png`,
    value: "75",
    unit: "%",
    rangeValue: "65",
    bottomLeftText: "0%",
    bottomRightText: "100%",
  },

  {
    title: "Давление",
    iconPath: `${METEO_DATA_ICON_FOLDER}/barometer.png`,
    value: "761",
    rangeValue: "78",
    bottomText: "Повышенное",
  },

  {
    title: "Видимость",
    iconPath: `${METEO_DATA_ICON_FOLDER}/visibility.png`,
    value: "28",
    unit: "км",
    rangeValue: "22",
    bottomText: "Нормальная",
  },

  {
    title: "Рассвет",
    iconPath: `${METEO_DATA_ICON_FOLDER}/sunrise.png`,
    value: "8:42",
    bottomText: "Прошло: 02:47",
  },
  {
    title: "Закат",
    iconPath: `${METEO_DATA_ICON_FOLDER}/sunset.png`,
    value: "16:37",
    bottomText: "Осталось: 05:08",
  },
  {
    title: "Сила ветра",
    iconPath: `${METEO_DATA_ICON_FOLDER}/northwestern.png`,
    value: "2",
    unit: "м/с",
    bottomText: "Северо-западный",
  },
];
