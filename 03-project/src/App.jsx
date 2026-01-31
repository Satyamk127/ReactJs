
import React from 'react'

const App = () => {
  return (
    <>
     
<div class="login-container">
    <h2>Login</h2>

    <form>
        <div class="input-group">
            <label>Username</label>
            <input type="text" placeholder="Enter username" required/>
        </div>

        <div class="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter password" required/>
        </div>

        <button type="submit">Login</button>

        <p class="signup">
            Don’t have an account? <a href="#">Sign up</a>
        </p>
    </form>
</div>
    </>
  )
}

export default App
