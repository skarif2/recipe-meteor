import React, { Component } from 'react'

export default class Ingredients extends Component {
	render() {
		return(
			<li>
				{this.props.ingredient}
			</li>
		)
	}
}