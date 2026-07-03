export const cardComponent = (data) => {
  const {
    title,
    iconPath,
    value,
    unit,
    rangeValue,
    bottomText,
    bottomLeftText,
    bottomRightText,
  } = data;

  const cardTopElements = (title, iconPath) => `
    <h3 class="card__title">${title}</h3>
    <div class="card__icon">
      <img src="${iconPath}" alt="${title}" width="32" height="32"/> 
    </div>
  `;

  const cardValueElement = (title, value, unit) => {
    switch (title) {
      case "Влажность":
        return `
        <p class="card__value">
          <span>${value}</span> 
          <span aria-hidden="true">${unit}</span>
          <span class="visually-hidden">процентов</span>
        </p>`;
        break;

      case "Давление":
        return `
        <p class="card__value">
          <span>${value}</span> 
          <span class="visually-hidden">миллиметр ртутного столба</span>
        </p>`;
        break;

      case "Видимость":
        return `
        <p class="card__value">
          <span>${value}</span>
          <span aria-hidden="true">${unit}</span>
          <span class="visually-hidden">километров</span>
        </p>`;
        break;

      case "Рассвет":
        return `
        <p class="card__value">
          <time datetime="0${value}">${value}</time>
        </p>`;
        break;

      case "Закат":
        return `
        <p class="card__value">
          <time datetime="${value}">${value}</time>
        </p>`;
        break;

      case "Сила ветра":
        return `
        <p class="card__value">
          <span>${value}</span> 
          <span aria-hidden="true">${unit}</span>
          <span class="visually-hidden">метра в секунду</span>
        </p>`;
        break;
    }
  };

  /* I don't know how to insert a background for the input in the "pressure" card. The AI ​​cleaned up the SVG icon, removing the slider. */
  const cardInputElement = (title, rangeValue) => {
    return title === "Давление"
      ? `<div class="card__range-wrapper">
            <svg width="126" height="8">
              <use href="../../public/sprite.svg#pressure-progress-bar"></use>
            </svg> 
            <input type="range" class="card__range card__range--dark" min="0" max="100" step="1" value="${rangeValue}" inert />
        </div>`
      : `<input type="range" class="card__range" min="0" max="100" step="1" value="${rangeValue}" inert />`;
  };

  const cardBottomTextElement = (
    title,
    bottomText,
    bottomLeftText,
    bottomRightText,
  ) => {
    return title === "Влажность"
      ? `<p class="card__text card__text--long" aria-hidden="true">
        <span>${bottomLeftText}</span>
        <span>${bottomRightText}</span>
      </p>`
      : `<p class="card__text">${bottomText}</p>`;
  };

  return [
    cardTopElements(title, iconPath),
    cardValueElement(title, value, unit),
    rangeValue && cardInputElement(title, rangeValue),
    cardBottomTextElement(title, bottomText, bottomLeftText, bottomRightText),
  ].join("");
};
