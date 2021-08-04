import React from "react"

const login =() => {
   return (

    <>
     <br/>
    <div class="container">
        <h3> <b>Welcome To Marketplace</b></h3>
        <hr/>
    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Username</label>
    <input type="text" class="form-control" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
  </form>
    </div>
   
    </>

    );

};

export default login;