import React from 'react';

function ShoppingTitle(props){
    return(
      <div>
        <h1> {props.title} </h1>
        <h2> Total Number of Items : {props.total} </h2>
       </div>  
       )
  }

export default ShoppingTitle;