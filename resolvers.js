const Recipe = require("./models/Recipe");

exports.resolvers = {
  Query: {
    getAllRecipes: async (root, args, { Recipes }) => {
      const allRecipes = await Recipe.find();
    }
  },
  Mutation: {
    addRecipe: async (
      root,
      { name, description, category, instructions, username },
      { Recipe }
    ) => {
      const newRecipe = await new Recipe({
        name,
        description,
        category,
        instructions,
        username
      }).save();
      return newRecipe;
    }
  }
};