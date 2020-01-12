import { elements } from "./base";
const renderNairlaga = orts => `
    <li class="recipe__item">
        <svg class="recipe__icon">
            <use href="img/icons.svg#icon-check"></use>
        </svg>
        <div class="recipe__ingredient">

            ${orts}
        </div>
    </li>
`;

export const highlightSelectedRecipe = id => {
  const arr = Array.from(document.querySelectorAll(".results__link"));
  arr.forEach(el => el.classList.remove("results__link--active"));

  const domObj = document.querySelector(`.results__link[href*="${id}"]`);

  if (domObj) domObj.classList.add("results__link--active");
};

export const clearRecipe = () => {
  // Одоо дэлгэц дээр харагдаж байгаа жорыг арилгана
  elements.recipeDiv.innerHTML = "";
};

export const renderRecipe = (recipe, isLiked) => {
  // Энэ жорыг дэлгэцэнд гаргаж үзүүлнэ.
  const html = `
    <figure class="recipe__fig">
        <img src="${recipe.image_url}" alt="${
    recipe.title
  }" class="recipe__img">
        <h1 class="recipe__title">
            <span>${recipe.title}</span>
        </h1>
        </figure>
        <div class="recipe__details">
        <div class="recipe__info">
            <svg class="recipe__info-icon">
                <use href="img/icons.svg#icon-stopwatch"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${
              recipe.time
            }</span>
            <span class="recipe__info-text"> минут </span>
        </div>
        <div class="recipe__info">
            <svg class="recipe__info-icon">
                <use href="img/icons.svg#icon-man"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${
              recipe.huniiToo
            }</span>
            <span class="recipe__info-text"> хүний орц</span>

            <div class="recipe__info-buttons">
                <button class="btn-tiny">
                    <svg>
                        <use href="img/icons.svg#icon-circle-with-minus"></use>
                    </svg>
                </button>
                <button class="btn-tiny">
                    <svg>
                        <use href="img/icons.svg#icon-circle-with-plus"></use>
                    </svg>
                </button>
            </div>

        </div>
        <button class="recipe__love">
            <svg class="header__likes">
                <use href="img/icons.svg#icon-heart${
                  isLiked ? "" : "-outlined"
                }"></use>
            </svg>
        </button>
        </div>



        <div class="recipe__ingredients">
        <ul class="recipe__ingredient-list">
          
            ${recipe.ingredients
              .map(el => renderNairlaga(el))
              .join(" ")}          

        </ul>

        <button class="btn-small recipe__btn">
            <svg class="search__icon">
                <use href="img/icons.svg#icon-shopping-cart"></use>
            </svg>
            <span>САГСАНД ХИЙХ</span>
        </button>
        </div>

        <div class="recipe__directions">
        <h2 class="heading-2">Хэрхэн бэлтгэх вэ</h2>
        <p class="recipe__directions-text">
            Жорыг бэлтгэж оруулсан
            <span class="recipe__by">${
              recipe.publisher
            }</span>. Манай вэб сайтаас жорын зааврыг авна уу
        </p>
        <a class="btn-small recipe__btn" href="${
          recipe.source_url
        }" target="_blank">
            <span>ЗААВАР ҮЗЭХ</span>
            <svg class="search__icon">
                <use href="img/icons.svg#icon-triangle-right"></use>
            </svg>

        </a>
        </div>
  `;

  elements.recipeDiv.insertAdjacentHTML("afterbegin", html);
};
