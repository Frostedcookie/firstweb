import React from 'react';
import {NavLink} from 'react-router-dom';

const Login=()=> {
  return (
    <div>
      <div className="container shadow my-5">
        <div className="row">
            <div className="col-md-5" form>
                <h1 className="display-4" >
                    Welcome back !
                </h1>
                <p className="lead">
                  Enter your credentials to login !  
                </p>
            <h5>OR</h5>
            <NavLink
              to="/register"
              className="btn btn-outline-primary ms-2 px-4 rounded-pill"
            >
              <i className=" fa fa-user-plus me-2"></i>Register
            </NavLink>

            </div>
            <h1 className="display-6" p-5 mb-5>LOGIN</h1>
            <form>
            <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
            </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
