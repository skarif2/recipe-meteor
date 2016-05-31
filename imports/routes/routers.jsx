import React from 'react'
import { mount } from 'react-mounter'

import { MainLayout } from '../ui/layouts/MainLayout.jsx'
import Recipe from '../ui/recipes/Recipes.jsx'
import RecipeForm from '../ui/recipes/RecipeForm.jsx'


FlowRouter.route('/', {
	action() {
		mount(MainLayout, {
			content: (<Recipe />)
		})
	}
})

FlowRouter.route('/recipe/add', {
	action() {
		mount(MainLayout, {
			content: (<RecipeForm />)
		})
	}
})