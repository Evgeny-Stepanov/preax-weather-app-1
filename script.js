const searchInputElement = document.querySelector(".search__input");
const searchInputClearButtonElement = document.querySelector(".search__clear");

const searchInputHandleChange = () => {
  searchInputElement.addEventListener("change", (event) => {
    searchInputValueToConsole(event);
  });
};

const searchInputValueToConsole = (event) => {
  const value = event.target.value;
  console.log(value);
};

const clearSearchInput = () => {
  searchInputClearButtonElement.addEventListener("click", () => {
    searchInputElement.value = "";
  });
};

searchInputHandleChange();
clearSearchInput();
