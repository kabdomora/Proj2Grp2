const { Recipe } = require('../models');

const recipeData = [
  {
    name: 'Chocolate Chip Cookies',
    description: 'A classic recipe for soft and chewy chocolate chip cookies.',
    ingredients: ['2 and 1/4 cups all-purpose flour', '1 tsp baking soda', '1 tsp salt', '1 cup unsalted butter, at room temperature', '3/4 cup white sugar', '3/4 cup brown sugar', '2 eggs', '2 tsp vanilla extract', '2 cups semisweet chocolate chips'],
    instructions: ['Preheat oven to 350 degrees F (175 degrees C). Grease cookie sheets.', 'Sift together the flour, baking soda, and salt; set aside.', 'In a medium saucepan, melt butter over low heat. Remove from heat, and stir in the white sugar, brown sugar, eggs, and vanilla. Gradually stir in the sifted ingredients.', 'Stir in the chocolate chips.', 'Drop rounded spoonfuls onto the prepared cookie sheets.', 'Bake for 8 to 10 minutes, or until golden. Cool on wire racks.'],
    rating_id: 1,
    user_id: 1,
  },
  {
    name: 'Spaghetti Bolognese',
    description: 'A traditional recipe for spaghetti with a meaty, tomato-based sauce.',
    ingredients: ['1 lb ground beef', '1 onion, diced', '2 cloves garlic, minced', '1 can (28 oz) crushed tomatoes', '1 cup beef broth', '1 tsp dried basil', '1 tsp dried oregano', '1 tsp salt', '1/2 tsp black pepper', '1 lb spaghetti'],
    instructions: ['Cook the spaghetti according to package instructions and set aside.', 'In a large pot or Dutch oven, brown the ground beef over medium heat. Drain any excess fat.', 'Add the onion and garlic and cook until softened, about 5 minutes.', 'Stir in the crushed tomatoes, beef broth, basil, oregano, salt, and pepper. Bring to a simmer and let cook for 20 minutes.', 'Serve the bolognese sauce over the cooked spaghetti.'],
    rating_id: 2,
    user_id: 2,
  },
  {
    name: "Vegetarian Chili",
    description: "A hearty and flavorful chili made with a variety of vegetables, beans, and spices.",
    ingredients: ["1 tbsp olive oil", "1 onion, diced", "1 bell pepper, diced", "2 cloves garlic, minced", "1 can diced tomatoes", "1 can kidney beans, drained and rinsed", "1 can black beans, drained and rinsed", "1 cup corn kernels", "1 tsp chili powder", "1 tsp cumin", "1/4 tsp cayenne pepper", "Salt and pepper"],
    instructions: ["In a large pot, heat the olive oil over medium-high heat.", "Add the onion, bell pepper, and garlic to the pot and cook until softened.", "Stir in the diced tomatoes, kidney beans, black beans, corn, chili powder, cumin, and cayenne pepper.", "Season the chili with salt and pepper to taste.", "Bring the chili to a simmer and cook for 20-25 minutes, or until the vegetables are tender and the flavors have melded together."],
    rating_id: 3,
    user_id: 3,
  },
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;