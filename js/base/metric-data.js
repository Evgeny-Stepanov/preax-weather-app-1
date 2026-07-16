import { METRIC_DATA_ICON_FOLDER } from "./constants.js";

export const metricData = [
  {
    title: "Влажность",
    iconPath: `${METRIC_DATA_ICON_FOLDER}/humidity.png`,
    value: "75",
    unit: "%",
    rangeValue: "65",
    leftText: "0%",
    rightText: "100%",
  },

  {
    title: "Давление",
    iconPath: `${METRIC_DATA_ICON_FOLDER}/barometer.png`,
    value: "761",
    rangeValue: "78",
    text: "Повышенное",
  },

  {
    title: "Видимость",
    iconPath: `${METRIC_DATA_ICON_FOLDER}/visibility.png`,
    value: "28",
    unit: "км",
    rangeValue: "22",
    text: "Нормальная",
  },

  {
    title: "Рассвет",
    iconPath: `${METRIC_DATA_ICON_FOLDER}/sunrise.png`,
    value: "8:42",
    text: "Прошло: 02:47",
  },
  {
    title: "Закат",
    iconPath: `${METRIC_DATA_ICON_FOLDER}/sunset.png`,
    value: "16:37",
    text: "Осталось: 05:08",
  },
  {
    title: "Сила ветра",
    iconPath: `${METRIC_DATA_ICON_FOLDER}/wind-direction.png`,
    value: "2",
    unit: "м/с",
    text: "Северо-западный",
  },
];
