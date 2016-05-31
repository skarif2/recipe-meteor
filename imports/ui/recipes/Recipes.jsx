import React, { Component } from 'react'
import TrackerReact from 'meteor/ultimatejs:tracker-react'

import { RecipeCollection } from '../../collections/recipe_collecton.js'
import Recipe from './Recipe.jsx'

export default class Recipes extends TrackerReact(Component) {
	constructor() {
    super();

    this.state = {
      subscription: {
        recipe: Meteor.subscribe('allRecipe')
      }
    }
  }

  componentWillUnmount() {
   	this.state.subscription.recipe.stop();
  }

  recipes() {
  	return RecipeCollection.find().fetch();
  }

	render() {
		return(
			<div>
				<h3>This is recipe</h3>
				<ul>
					{this.recipes().map((recipe) => {
						return <Recipe key={recipe._id} recipe={recipe} />
					})}
				</ul>
			</div>
		)
	}
}