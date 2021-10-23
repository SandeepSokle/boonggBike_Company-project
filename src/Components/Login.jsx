import { useState } from "react/cjs/react.development";
import "../SCSS/Login.scss";
import axios from "axios";

export const Login = () => {
  let [loginStatus, setLoginStatus] = useState("login");
  let [forgetModal, setForgetModal] = useState(false);

  let [name, setName] = useState("");
  let [localEmail, setLocalEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [password, setPassword] = useState("");

  // console.log(forgetModal);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const allIds = await axios.get("http://localhost:5000/user/all");

      const isEmailResistered = allIds.data.data.find((e) => {
        return e.email === localEmail;
      });

      if (isEmailResistered && loginStatus == "signup") {
        alert("Email Allready Resistered:");
        return;
      }

      
      if (isEmailResistered && loginStatus == "login" && !forgetModal) {
        if (isEmailResistered.password !== password) alert("wrong password:");
        return;
      }
      
      if (isEmailResistered && forgetModal) {
        var elementId = isEmailResistered._id;
        console.log(isEmailResistered._id);
        console.log(isEmailResistered.name);
        console.log(isEmailResistered.email);
        const { data } = await axios.put(
          `http://localhost:5000/user/${elementId}`,
          {
            password,    
          }
        );

        // console.log(data);
        alert(data.data)

        return;
      }

      // const storedEmails =  allIds.data.map(e =>{
      //   return e.email;
      // })

      const { data } = await axios.post("http://localhost:5000/user/create", {
        name,
        email: localEmail,
        password,
        phone,
      });
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="loginContainer">
      <form method="post" onSubmit={handleSubmit}>
        {loginStatus === "login" && !forgetModal ? (
          <h1>Login</h1>
        ) : loginStatus === "login" && forgetModal ? (
          <h1>Forget Password</h1>
        ) : (
          <h1>SignUp</h1>
        )}
        {loginStatus === "login" ? (
          <div className="loginContainerLogin">
            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                placeholder="Email"
                onChange={(e) => {
                  setLocalEmail(e.target.value);
                }}
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <input
                type="password"
                class="form-control"
                name="password"
                id="exampleInputPassword1"
                placeholder={`${forgetModal ? "new Password" : "password"}`}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
                {" "}
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
            <button type="submit" class="btn btn-primary loginSubmitBtn">
              {`${forgetModal ? "Update" : "Login"}`}
            </button>

            <h6 className="signup">
              Looking to Create an account?{" "}
              <button
                className="signupBtnInLogin"
                onClick={() => {
                  setLoginStatus("signup");
                }}
              >
                Sign Up
              </button>{" "}
            </h6>

            {forgetModal ? (
              <h6 className="signup" onClick={() => {
                setForgetModal(false);
              }}>
                I know Password
              </h6>
            ) : (
              <h6 className="forget" onClick={() => {
                setForgetModal(true);
              }}>
                Forget Password?
                
              </h6>
            )}
          </div>
        ) : (
          <div className="loginContainerSignUp">
            <input
              type="text"
              class="form-control mb-3"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="name"
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="email"
              class="form-control mb-3"
              id="exampleInputEmail1"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Email"
              onChange={(e) => {
                setLocalEmail(e.target.value);
              }}
            />
            <input
              type="number"
              class="form-control mb-3"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Mobile Number"
              name="phoneNo"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <input
              type="password"
              class="form-control mb-3"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
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
              Already have an account?{" "}
              <button
                className="signupBtnInLogin"
                onClick={() => {
                  setLoginStatus("login");
                }}
              >
                Login
              </button>{" "}
            </h6>
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
