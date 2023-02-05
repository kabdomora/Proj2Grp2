const recipe_id = window.location.href.split('/')[4];

async function getIngredients() {
    const response = await fetch(`../api/recipes/${recipe_id}`)
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

function addReview(){
    let newReview="<input class='w-fit p-5 bg-lime-300 text-black rounded-lg shadow-lg m-5' type='text' id='newReview'>";
    $('#allReviews').append(newReview);
    $('#addReview').remove();
    let saveDelete="<div class='m-5 grid grid-cols-2 gap-4 place-items-stretch items-stretch' id='saveDelete'>";
    let deleteButton="<button class='w-32 bg-red-400 border-2 border-black border-single rounded-md' onclick='cancelReview()' id='cancel'>Cancel";
    let saveButton="<button class='bg-lime-300 border-2 border-black border-single rounded-md' onclick='saveReview()' id='save'>Save";
    $('#allReviews').append(saveDelete);
    $('#saveDelete').append(deleteButton);
    $('#saveDelete').append(saveButton);
}

function cancelReview(){
    $('#saveDelete').remove();
    $('#newReview').remove();
    let addReview="<button class='bg-lime-300 border-2 border-black border-single rounded-md' onclick='addReview()'' id='addReview'>Add a Review";
    $('#reviewHeader').append(addReview);
}


async function saveReview(){
  
    const review = document.querySelector('#newReview').value.trim();
    console.log('review', review);
    console.log('recipe', typeof(recipe_id) );
    
  
    if ( review && recipe_id ) {

      const response = await fetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify( {review, recipe_id} ),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to submit review.');
      }
    }
}



//   document
//     .getElementById('save')
//     .addEventListener('click', newReview);

const recipe = getIngredients();