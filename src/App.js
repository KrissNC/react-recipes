import React, { Component } from 'react';

import './App.css';
// import {recipes} from './tempList';

import RecipeList from './components/RecipeList.jsx';

class App extends Component {
  state = {
    recipes: [],
    url: "https://www.food2fork.com/api/search?key=" +  process.env.REACT_APP_APIKEY1
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
    this.getRecipes();

  }
  render() {
    console.log(this.state.recipes);
    return (
        <React.Fragment>
            <RecipeList></RecipeList>oo
        </React.Fragment>
          )
  }
}

export default App;