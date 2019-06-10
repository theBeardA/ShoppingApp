import React from 'react';

function ShoppingList(props){
    return(
      <div>
        <h3> {props.header} </h3>
        <ol>
          <ListItem name = {props.items[0]}/>
          <ListItem name = {props.items[1]}/>
          <ListItem name = {props.items[2]}/>
        </ol>
        </div>
    )
  }
  function ListItem(props){
    return <li> {props.name} </li>
  }

export default ShoppingList;