

const ingredientString = JSON.parse(recipe.ingredients);
const stepString = JSON.parse(recipe.instructions);

function renderIngredients(ingredientString) {
    console.log(ingredientString);
    ingredientString.forEach(ingredient => {
        const ingEl = document.createElement('li');
        ingEl.innerHTML = `${ingredient}`;
        $('#ingredients').append(ingEl);
    })
}

function renderSteps(stepString) {
    console.log(stepString);
    stepString.forEach(step => {
        const stepEl = document.createElement('li');
        stepEl.innerHTML = `${step}`;
        $('#steps').append(stepEl);
    })
}

renderIngredients();
renderSteps();