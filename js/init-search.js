export const initSearch = () => {
  const searchFormElement = document.querySelector(".header__search form");
  const searchInputElement = searchFormElement.querySelector(".search__input");
  const searchMagnifierIconElement = searchFormElement.querySelector(
    ".search__magnifier-icon",
  );
  const searchClearButtonElement = searchFormElement.querySelector(
    ".search__clear-button",
  );

  const searchFormHandleSubmit = () => {
    searchFormElement.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  };

  const searchInputHandleChange = () => {
    searchInputElement.addEventListener("input", (event) => {
      const cleanInputValue = event.target.value.replace(/\s+/g, " ").trim();

      if (cleanInputValue) {
        searchInputValueToConsole(cleanInputValue);
      }
    });
  };

  const searchInputValueToConsole = (value) => {
    console.log(value);
  };

  const searchInputHandleFocus = () => {
    searchInputElement.addEventListener("focus", () => {
      searchMagnifierIconElement.classList.add(
        "search__magnifier-icon--is-hidden",
      );
      searchClearButtonElement.classList.add(
        "search__clear-button--is-visible",
      );
    });
  };

  const searchInputHandleBlur = () => {
    searchInputElement.addEventListener("blur", () => {
      if (!searchInputElement.value) {
        searchMagnifierIconElement.classList.remove(
          "search__magnifier-icon--is-hidden",
        );
        searchClearButtonElement.classList.remove(
          "search__clear-button--is-visible",
        );
      }
    });
  };

  const searchClearButtonHandleClick = () => {
    searchClearButtonElement.addEventListener("mousedown", (event) => {
      event.preventDefault();
      searchInputElement.value = "";
    });
  };

  const searchClearButtonHandleHover = () => {
    searchClearButtonElement.addEventListener("mouseenter", () => {
      searchInputElement.style.backgroundColor = "var(--bg-hover-color-input)";
    });

    searchClearButtonElement.addEventListener("mouseleave", () => {
      searchInputElement.style.backgroundColor = "";
    });
  };

  searchFormHandleSubmit();
  searchInputHandleChange();
  searchInputHandleFocus();
  searchInputHandleBlur();
  searchClearButtonHandleClick();
  searchClearButtonHandleHover();
};
