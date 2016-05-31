import React, { Component } from 'react'

import Ingredients from './Ingredients.jsx'

export default class Recipe extends Component {
	render() {
		return(
			<li>
				{this.props.recipe.recipeName}
				<br />
				<span>Ingredients</span><br />
				<ul>
					{this.props.recipe.ingredients.map((ingredient) => {
						return <Ingredients key={this.props.recipe.ingredients.indexOf(ingredient)} ingredient='ingredient' />
					})}
				</ul>
			</li>
		)
	}
}