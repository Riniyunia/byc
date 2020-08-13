import "../component/meal-list.js";
import MealData from "../data/meal-data.js";

const main = () => {
    const searchForm = document.querySelector(".search-container");
    const mealListElement = document.querySelector("meal-list");

    const onButtonSearchClicked = () => {
        MealData.searchMeal(searchForm.value)
        .then(renderResult)
        .catch(fallbackResult)
    };

    const renderResult = results => {
        mealListElement.meals = results;
    };

    const fallbackResult = message => {
        mealListElement.renderError(message);
    };

    searchForm.clickEvent = onButtonSearchClicked;
};

export default main;