import React from 'react';

const Total =(props)=>{
    console.log(props.itemInfo)
   
return(
    <div className="total">{props.itemInfo}</div>
)

}


export default Total;