import React from 'react';
// import { Link, Route } from 'react-router-dom';

class RecipeMatches extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
    console.log(this.state);
    // await this.props.recipes ? console.log(this.props.recipes.recipes) : console.log('noresults yetasdlkfj')
  }


  componentWillReceiveProps(newProps, Context) {
    console.log(this.props.recipes, newProps, 'NEW PROPS');
    console.log(Context, 'new context2');
  }

  componentWillUpdate(update) {
    console.log(update, 'update');
  }

  render() {
    let recipe_img_urls = [
      'https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg',
      'https://drop.ndtv.com/albums/COOKS/corngallery/creolespicedcornthumb_640x480.jpg',
      'http://www.technobuffalo.com/wp-content/uploads/2014/04/fast-food.jpg',
    ];
      let recipe_names = ['Salmon Dinner', 'Creole Corn', 'Burger & Fries'];
    let rows = [];
    console.log(this.props.recipes, 'checkpropsthru');
    let condition = this.props.recipes.length === 0;
    let recipe_images =  condition ? recipe_img_urls : this.props.recipes;
    let recipe_name = condition ? recipe_names : this.props.recipes;
    console.log(this.props);
    [0, 1, 2].forEach(n => {
      let a = (
        <div className="recipe_img_name" key={n}>
          <img className="recipe_image"  src={recipe_images[n]} />
          <div className="recipe-name">{recipe_name[n]}</div>
        </div>
      );
      rows.push(a);
    });
    return (
      <div className="recipes_preview">
        <div className="inner">
          <p className="inner-text">Suggested Recipes</p>
          <div className="recipe_images">{rows}</div>
        </div>
        <button className="button">More Recipes</button>
      </div>
    );
  }
}

export default RecipeMatches;
