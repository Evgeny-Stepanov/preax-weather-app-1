import { ruPlural } from "./constants.js";

export const debounce = (func, delay) => {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

export const toConsole = (value) => console.log(value);

export const pluralizeIntl = (number, forms) => {
  const category = ruPlural.select(number);
  return forms[category] || forms.many || forms.other || forms.one;
};
