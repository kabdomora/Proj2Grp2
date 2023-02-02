const { $ } = require("awesomplete");

const ingredientString = recipe.ingredients;
const stepString = recipe.instructions;

ingredients = ingredientString.split("*");
steps = stepString.split("*");

function renderIngredients(ingredients) {
    console.log(ingredients);
    ingredients.forEach(ingredient => {
        const ingEl = document.createElement('li');
        ingEl.innerHTML = `${ingredient}`;
        $('#ingredients').append(ingEl);
    })


    let totalIngredients = parseInt($('#totalIngs').val())+1;
    let ingredient="<li id='ing_"+totalIngredients+"'>";
    $('#ingredients').append(ingredient);
    $('#totalIngs').val(totalIngredients);
}

function renderSteps() {
    let totalSteps = parseInt($('#totalSteps').val())+1;
    let step="<li id='step_"+totalSteps+"'>";
    $('#steps').append(step);
    $('#totalSteps').val(totalSteps);
}

renderIngredients();
renderSteps();