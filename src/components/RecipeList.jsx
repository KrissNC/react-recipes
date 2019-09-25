import React, { Component } from 'react';
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';

export default class RecipeList extends Component {

    render() {
        const {recipes, handleDetailsId}= this.props;

        return (
        <React.Fragment>
            <RecipeSearch></RecipeSearch>
            <div className="container my-5" >
                <div className="row">
                    <div className="col-10 mx-auto col-md6 text-center text-uppercase mb3"></div>
                    <h1 className="text-slanted">Recipes list</h1>
                </div>
                <div className="row">
                    {
                        recipes.map( recipe => {
                            return(<Recipe 
                                key={recipe.recipe_id} 
                                recipe={recipe} 
                                handleDetailsId={ () => handleDetailsId(0,recipe.recipe_id) } 
                                />)
                            }
                        )
                    }
                </div>
            </div>
        </React.Fragment>
        )
    }
}
