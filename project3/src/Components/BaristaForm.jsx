import React, {Component, useState} from "react";
import RecipeChoices from "../Components/RecipeChoices"
import drinksJson from "./drinks.json"
const BaristaForm = () => {
  const [currentDrink, setCurrentDrink] = useState('');
  const [trueRecipe, setTrueRecipe] = useState({drinksJson});
  
  const [inputs, setInputs] = useState({
    'temp': '',
    'milk': '',
    'syrup': '',
    'blended': ''
  });
  function areObjectsEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (let key of keys1) {
      if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
        if (!areObjectsEqual(obj1[key], obj2[key])) {
          return false;
        }
      } else if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  
    return true;
  }
  const [newa,Setnewa]=useState("")
  const FindIngredints=()=>{
    
    
    for(let sample = 0;  (sample < drinksJson.drinks.length);sample++){
      const x = drinksJson.drinks[sample].ingredients;
      console.log(x,inputs) 
    
    if(areObjectsEqual(inputs,x)){
      Setnewa(drinksJson.drinks[sample].name)

    }
  }
  }
  const ingredients =[ 
    
    {name:"temp",'temp' : ['hot', 'lukewarm', 'cold']},
    {name:"syrup",'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none']},
    {name:"milk",'milk': ['cow', 'oat', 'goat', 'almond', 'none']},
    {name:"blended",'blended': ['yes', 'turbo', 'no']}
  ]
  const onNewDrink = () => {
    
  };
  
  const onCheckAnswer = () => {
    
  };
  
  return (
    <div>
      
      <form >
    
      <h2>Hi, I'd like to order a:{newa}</h2>
  </form>

  
  {
    ingredients.map((ingred,index)=>(
      <div key={index}>
      <h3>{ingred.name}</h3>
<div className="answer-space" >
  {inputs[ingred.name]} 
</div>
<RecipeChoices
  handleChange={(e) => setInputs((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
  }))}
  label={ingred.name}
  choices={ingredients[index][ingred.name]}
  checked={inputs[ingred.name]}

/>
      </div>
    ))
  }
  
  
  <button type="submit" className="button submit" onClick={FindIngredints}>
    Check Answer
  </button>

  <button
    type="new-drink-button"
    className="button newdrink"
    onClick={onNewDrink}
  >
    New Drink
  </button>

    </div>
  );
  
};

export default BaristaForm;