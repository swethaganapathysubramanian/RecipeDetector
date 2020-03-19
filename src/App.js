import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import FoodDetection from './components/FoodDetection/FoodDetection';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import Clarifai from 'clarifai';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Recipe from './components/Recipe';
import Recipesare from './components/Recipesare';
import './App.css';

const clarifai_key = process.env.REACT_APP_CLARIFAI_API_KEY;


const app = new Clarifai.App({
  apiKey: clarifai_key
});

const APP_ID = process.env.REACT_APP_APP_ID;
const APP_KEY = process.env.REACT_APP_API_KEY;

const particlesbg = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }},
      line_linked: {
      color: '#FFF',
      shadow: {
        enable: false
      }}
    }
      ,
      "interactivity": {
        "detect_on": "window",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          }
        }
      }
    }
  
  

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      recipes: [],
      recipe: {},
      content: ''
    }
  }

  onInputChange = (event) =>{
    this.setState({recipes : []})
    this.setState({input: event.target.value});
  }

  calculateIngredients = (data) =>{
      const clarifaiface = data.outputs[0].data.concepts;
      console.log(clarifaiface)   
    var ingredients = clarifaiface.filter(ingredient =>{
            return ingredient.value > 0.99;
    })
    if (ingredients.length === 0){
      ingredients = clarifaiface.filter(ingredient => {
        return ingredient.value > 0.70;
      })
    }
    const ingg = ingredients.map(ingredient=>{
      return ingredient.name;
    })
    //const ingg = revingg.reverse();
    this.getRecipes(ingg);
    console.log(ingg);
  }

  getRecipes = async (ingg) => {
    const response = await fetch(`https://api.edamam.com/search?q=${ingg}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=9`);
    const data = await response.json();
    console.log(data.hits);
    this.setState({recipes: data.hits})
    this.setState({recipe: this.state.recipes[1]});
    this.setState({ content: "The searched recipes are.."});
  } 


  onRouteChange = (route) =>{
      if (route === 'signout'){
        this.setState({isSignedIn: false})
      }
      if (route === 'home'){
        this.setState({ isSignedIn: true })
      }
      this.setState({route: route})
  }

  onSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models.predict(Clarifai.FOOD_MODEL, this.state.input)
    .then(response => this.calculateIngredients(response))
    .catch(err=>console.log(err))
      
    }

    render(){
      const {isSignedIn, imageUrl, route, box, recipes, recipe, content} = this.state;
  return (
    <div className="App">
      <Particles className='particles' params={particlesbg} />
      <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} />
      {route === 'home' ?
        <div><Logo />
         <ImageLinkForm onInputChange={this.onInputChange}
            onButtonSubmit={this.onSubmit} />
          <br></br>
          <FoodDetection imageUrl = {imageUrl} box={box} />
         
         <Recipesare content={content} />
          <div className="recipes">
          {recipes.map(recipe => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              url = {recipe.recipe.url}
            />))}
        </div>
        </div>
        : this.state.route === 'register' ?
          <Register onRouteChange={this.onRouteChange} />
          : <SignIn onRouteChange={this.onRouteChange} />
      }
      </div>
  );
}
}

export default App;



