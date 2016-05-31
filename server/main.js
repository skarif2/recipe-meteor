// import { Meteor } from 'meteor/meteor';

// Meteor.startup(() => {
//   // code to run on server at startup
// });

import { RecipeCollection } from '../imports/collections/recipe_collecton.js'

Meteor.publish('allRecipe', function() {
	return RecipeCollection.find({});
})