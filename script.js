const searchFormElement = document.querySelector(".header__search form");

const searchFormHandleSubmit = () => {
  searchFormElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputValue = event.currentTarget.elements.search.value.trim();

    searchInputValueToConsole(inputValue);
  });
};

const searchInputValueToConsole = (value) => {
  console.log(value);
};

searchFormHandleSubmit();
