
const id = window.location.href.split('/')[4];

async function getIngredients() {
    const response = await fetch(`../api/recipes/${id}`)
    const data = await response.json();
    
    // console.log("data", data);
    // console.log("ingredientString", data.ingredients);

    const ingredients = JSON.parse(data.ingredients);
    const instructions = JSON.parse(data.instructions);
    
    // console.log("ingredients", ingredients);
    // console.log("instructions", instructions);

    ingredients.forEach((value, index) => {
        if (index >=0) {
            const ingLi = document.createElement('li');
            ingLi.setAttribute('class', 'font-light');
            ingLi.innerHTML = `${value}`;
            $('#ingredients').append(ingLi);
        }
    })

    instructions.forEach((value, index) => {
        if (index >=0) {
            const stepLi = document.createElement('li');
            stepLi.setAttribute('class', 'font-light');
            stepLi.innerHTML = `${value}`;
            $('#steps').append(stepLi);
        }
    })


    return data;
}


const recipe = getIngredients();