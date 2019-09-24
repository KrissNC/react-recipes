import React, { Component } from 'react';

import './App.css';
import {recipes} from './tempList';

import RecipeList from './components/RecipeList.jsx';
import RecipeDetail from './components/RecipeDetail.jsx';

class App extends Component {
  state = {
    recipes: recipes,
    // to fetch real url 
    // recipes: [],
    
    url: "https://www.food2fork.com/api/search?key=" +  process.env.REACT_APP_APIKEY1,
    details_id:35384
  };

  async getRecipes() {
    try{
      //console.log('fetching ' + this.state.url);
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      
      this.setState({
        recipes: jsonData.recipes
      });

    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount(){
    // to fetch real url
    // this.getRecipes();

  }
  render() {
    //console.log(this.state.recipes);
    return (
        <React.Fragment>
            {/* <RecipeList recipes={this.state.recipes}></RecipeList> */}
            <RecipeDetail id={this.state.details_id} />
        </React.Fragment>
          )
  }
}

export default App;