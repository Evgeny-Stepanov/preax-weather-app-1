import { toConsole, debounce } from "../base/utils.js";
import { DEBOUNCE_DELAY } from "../base/constants.js";

export const search = () => {
  const searchElement = document.querySelector(".search");
  const searchFormElement = searchElement.querySelector("form");
  const searchInputElement = searchElement.querySelector(".search__input");

  const submitHandler = () => {
    searchFormElement.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  };

  const inputHandler = (event) => {
    const cleanValue = event.target.value.trim();

    if (!cleanValue) return;

    toConsole(cleanValue);
  };

  const debouncedInputHandler = debounce(inputHandler, DEBOUNCE_DELAY);

  searchInputElement.addEventListener("input", debouncedInputHandler);

  submitHandler();
};
