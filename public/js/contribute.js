function addIng(){
    var newIngredient = parseInt($('#totalIngs').val())+1;
    var nextIngredient="<input class='block border-2 border-black border-single rounded-md bg-cyan-400' type='text' id='ing_"+newIngredient+"'>";
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
    var nextStep="<input class='block border-2 border-black border-single rounded-md bg-cyan-400' type='text' id='step_"+newStep+"'>";
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