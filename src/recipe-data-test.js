import { useLayoutEffect } from 'react';
import {recipes} from './recipe-data.js';


function IngredientList({ingredients}) {
   let ingredientsList = null;
   if(Array.isArray(ingredients) && ingredients.length !== 0 ) {
      ingredientsList = ingredients.map((ingredient) => 
         <li key={ingredient}> {ingredient}</li>
      );
   }
   return ingredientsList;
}

 function renderRecipesList({recipes}) {
    let list = null;
    if(Array.isArray(recipes) && recipes.length !== 0 ) {
        list = recipes.map((recipe) => 
           <Fragment key={recipe?.id}>
            <h2>{recipe?.name}</h2>
            <ul>
               <IngredientList ingredients = {recipe?.ingredients} /> 
            </ul>
           </Fragment>
        );
    }
    return (
         <div>
            <h1>Recipes</h1>
            {list}
         </div>
    );
 }

 function testClick() {
   return(
      <button type="button" onClick={() => handleClick()}></button>
   );
 }