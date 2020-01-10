import { elements } from "./base";
// publisher: "Two Peas and Their Pod"
// title: "Avocado Pita Pizza with Cilantro Sauce"
// source_url: "http://www.twopeasandtheirpod.com/avocado-pita-pizza-with-cilantro-sauce/"
// recipe_id: "54388"
// image_url: "http://forkify-api.herokuapp.com/images/avocadopizzawithcilantrosauce4bf5.jpg"
// social_rank: 99.99999665701256
// publisher_url: "http://www.twopeasandtheirpod.com"
// private function
const renderRecipe = recipe => {
  console.log(recipe);
  const markup = `
    <li>
        <a class="results__link" href="#${recipe.recipe_id}">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="Test">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${recipe.title}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li>
  `;
  // ul рүүгээ нэмнэ
  elements.searchResultList.insertAdjacentHTML("beforeend", markup);
};
export const clearSearchQuery = () => {
  elements.searchInput.value = "";
};

export const clearSearchResult = () => {
  elements.searchResultList.innerHTML = "";
};
export const getInput = () => elements.searchInput.value;
export const renderRecipes = recipes => {
  recipes.forEach(renderRecipe);
};
