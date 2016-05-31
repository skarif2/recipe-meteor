import { Mongo } from 'meteor/mongo'
import { check } from 'meteor/check'

export const RecipeCollection = new Mongo.Collection('recipe')

Meteor.methods({
	addRecipe(recipe, ingredients) {
		check(recipe, String);
		check(ingredients, Array);

		RecipeCollection.insert({
			recipeName: recipe,
			ingredients: ingredients,
			createdAt: new Date(),
		});
	}
})