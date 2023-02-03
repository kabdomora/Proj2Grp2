function addIng(){
    var newIngredient = parseInt($('#totalIngs').val())+1;
    var nextIngredient="<input class='block border-2 border-black border-single rounded-md bg-lime-400' type='text' name='ingList' id='ing_"+newIngredient+"'>";
    $('#allIngredients').append(nextIngredient);
    $('#totalIngs').val(newIngredient)
  }
  function removeIng(){
    var lastIngredient = $('#totalIngs').val();
    if(lastIngredient>1){
      $('#ing_'+lastIngredient).remove();
      $('#totalIngs').val(lastIngredient-1);
    }
  }

  function addStep(){
    var newStep = parseInt($('#totalSteps').val())+1;
    var nextStep="<input class='block border-2 border-black border-single rounded-md bg-lime-400' type='text' name='stepList' id='step_"+newStep+"'>";
    $('#allSteps').append(nextStep);
    $('#totalSteps').val(newStep)
  }
  function removeStep(){
    var lastStep = $('#totalSteps').val();
    if(lastStep>1){
      $('#step_'+lastStep).remove();
      $('#totalSteps').val(lastStep-1);
    }
  }

  const newRecipe = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#recipe-name').value.trim();
    const description = document.querySelector('#recipe-description').value.trim();
    let ingredients = "[";
      function ingArray() {
        let ingString = document.getElementsByName('ingList');
        for (var i = 0; i < ingString.length; i++) {
          let ingredient = ingString[i];
          ingredients += `"` + ingredient.value + `",`;
        }
        ingredients = ingredients.substring(0,ingredients.length-1);
        ingredients += "]";
      }
    let instructions = "[";
      function stepArray() {
        let insString = document.getElementsByName('stepList');
        for (var i = 0; i < insString.length; i++) {
          let step = insString[i];
          instructions += `"` + step.value + `",`;
        }
        instructions = instructions.substring(0,instructions.length-1);
        instructions += "]";
      }
    const category_id = document.querySelector('#category').value.trim();
  
    if (name && description ) {
      ingArray();
      stepArray();

      const response = await fetch('/api/recipes', {
        method: 'POST',
        body: JSON.stringify({ name, description , ingredients , instructions, category_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to submit recipe.');
      }
    }
  };

  function redirect() {
    document.location.replace('/');
  }
  
  document
    .querySelector('#save')
    .addEventListener('click', newRecipe);
  
  document
    .querySelector('#cancel')
    .addEventListener('click', redirect);