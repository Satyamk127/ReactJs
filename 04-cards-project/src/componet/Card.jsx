import React from 'react'

function Card(propse) {
  console.log(propse.user,propse.age);
  return (
    <div class="card">
        <img src="https://images.unsplash.com/photo-1505968409348-bd000797c92e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" alt="Card Image" />
        <div class="card-content">
          <h2>My Card</h2>
          <p>
            Hello my name is {propse.user} and my age is {propse.age}
          </p>
          <button>Read More</button>
        </div>
      </div>
  )
}

export default Card
