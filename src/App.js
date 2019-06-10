import React from 'react';
import ShoppingList from './ShoppingList';
import ShoppingTitle from './ShoppingTitle';

function App(props){
  return(
    <div>
    <ShoppingTitle title = "My Shopping List"  total = "9"/>
    <ShoppingList header = "Food" items = {["Apple", "Bread","Cheese"]}/>
    <ShoppingList header = "Clothes" items = {[ "Shirt","Pants","Hat"]}/>
    <ShoppingList header = "Supplies" items = {[ "Pen","Paper","Glue"]}/>
    </div>
      );
}

export default App;


