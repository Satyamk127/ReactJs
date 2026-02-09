import React from 'react'

function Pass(props) {
  return (
   
   <div class="card">
        <img src={props.logo}/>
        <h3>{props.name}</h3>
        <p>{props.price}</p>
        <div class="card-footer">Tech Company</div>
    </div>
   
  )
}

export default Pass

