import { useState } from "react/cjs/react.development";
import "../SCSS/Login.scss";

export const Login = () => {
  let [loginStatus, setLoginStatus] = useState("signup");

  return (
    <div className="loginContainer">
      <form>
      {
        loginStatus === "login" ? <h1>Login</h1> : <h1>SignUp</h1>
      }
        {loginStatus === "login" ? (
          <div className="loginContainerLogin">
            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder = "Email"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder = "Password"
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" class="btn btn-primary">
              Login
            </button>
            <h6 className="signup">
              Looking to Create an account?{" "}
              <button className="signupBtnInLogin" onClick = {()=>{
                setLoginStatus("signup")
              }}>Sign Up</button>{" "}
            </h6>
          </div>
        ) : (
          <div className="loginContainerSignUp">
            <form>
              
                <input 
                  type="text"
                  class="form-control mb-3"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder = "Name"
                />
             <input
                  type="email"
                  class="form-control mb-3"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder = "Email"
                />
                <input
                type="number"
                class="form-control mb-3"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder = "Mobile Number"
              /><input
              type="password"
              class="form-control mb-3"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder = "Password"
            />
             
             <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
           
              <button type="submit" class="btn btn-primary">
                Sign Up
              </button>
              <h6 className="signup">
              Already have an account?
              {" "}
              <button className="signupBtnInLogin" onClick = {()=>{
                setLoginStatus("login")
              }}>Login</button>{" "}
            </h6>
            </form>
          </div>
        )}

        <div className="LoginBtns mt-4">
          <button type="button" class="btn btn-danger loginWithGoogle">
            Login With Google
          </button>
          <button type="button" class="btn btn-primary loginWithFb">
            LogIn with facebook
          </button>
        </div>
      </form>
    </div>
  );
};
