import React, { Component } from 'react';

import './App.css';
// import {recipes} from './tempList';

import RecipeList from './components/RecipeList.jsx';
import RecipeDetail from './components/RecipeDetail.jsx';

class App extends Component {
  state = {
    // recipes: recipes,
    // to fetch real url 
    recipes: [],
    
    url: "https://www.food2fork.com/api/search?key=" +  process.env.REACT_APP_APIKEY1,
    details_id:35389,
    pageIndex: 1
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
    this.getRecipes();

  }

  displayPage = (index) => {
    switch(index) {
      default:
      case 1:
        return (<RecipeList recipes={this.state.recipes} handleDetailsId={this.handleDetailsId}></RecipeList>)
      case 0:
        return(<RecipeDetail id={this.state.details_id} handleIndex={this.handleIndex}/>)

    }
  }


  handleIndex = index => {
    this.setState({pageIndex:index})
  }
  
  
  handleDetailsId = (index,id)  => {
    this.setState(
      {
        pageIndex:index,
        details_id:id
      }
      )
  }

  render() {
    //console.log(this.state.recipes);
    return (
        <React.Fragment>
          {this.displayPage(this.state.pageIndex)}            
        </React.Fragment>
          )
  }
}

export default App;