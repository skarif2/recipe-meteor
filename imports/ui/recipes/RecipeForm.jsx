import React, { Component } from 'react'
import TrackerReact from 'meteor/ultimatejs:tracker-react'

import Ingredients from './Ingredients.jsx'

export default class RecipeForm extends TrackerReact(Component) {

	constructor() {
    super();

    this.state = {
    	ingredient: [],
    }
  }

	addRecipe(event) {
		event.preventDefault();
		Meteor.call('addRecipe', this.refs.recipe.value.trim(), this.state.ingredient, (error, data) => {
			if(error){
				console.log('Error inserting data');
			} else {
				window.location = "/";
			}
		});
	}

	addIngredient(event) {
		event.preventDefault();
		let temp = this.state.ingredient
		temp.push(this.refs.ingredient.value.trim());
		this.setState({ingredient: temp});
		this.refs.ingredient.value = '';
	}

	render() {
		return(
			<div>
				<form className='new-recipe'>
					<h3>Add New Recipe</h3>
					<span>Recipe Name:</span><br />
					<input
						type='text'
						ref='recipe'
						placeholder='Recipe Name'
					/>
					<button onClick={this.addRecipe.bind(this)}>Done</button>
				</form>
				<form>
					<span>Ingredients:</span><br />
					<ul>
						{this.state.ingredient.map((ingredient) => {
							return (
								<Ingredients
									key={this.state.ingredient.indexOf(ingredient)} 
									ingredient={ingredient} />
								)
						})}
					</ul>
					<input
						type='text'
						ref='ingredient'
						placeholder='Ingredient Name'
					/>
					<button onClick={this.addIngredient.bind(this)}>Add</button>
				</form>
				</div>
		)
	}
}