import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import useFetch from "./useFetch";
import loginBgImage from "./assets/loginPageBg.jpeg";

const Login = (props) => {
  console.log("props ", props);
  const navigate = useNavigate();
  const [email, setIsEmail] = useState("");
  const [password, setPassword] = useState("");

  function loginUser(e) {
    //console.log(e);
    e.preventDefault();

    fetch("https://restaurant-project-rwmk.onrender.com/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (
          data.message === "email not found!" ||
          data.message === "Invalid Password"
        ) {
          props.setIsLoggedIn(false);
          alert("Invalid Credentials");
        } else {
          console.log("Logged in User");

          console.log("email : ", email);
          console.log("password : ", password);

          navigate("/");
          console.log("Loggin successfull!");
          props.setIsLoggedIn(true);
          // return <Navigate replace to="/app" />;
        }
        //accessToken = data.accessToken;
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <>
      <div className="login">
        <div className="login-left">
          <div className="login-form">
            <form>
              <h1>Sign In</h1>
              <label htmlFor="userEmail">
                Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              </label>
              <input
                type="email"
                onChange={(e) => setIsEmail(e.target.value)}
                id="userEmail"
              ></input>
              <br />
              <label htmlFor="userPassword">Password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                id="userPassword"
              ></input>
              <br />
              <br />
              <button onClick={(e) => loginUser(e)} type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="login-right">
          <img
            className="login-img"
            src={loginBgImage}
            alt="Company Banner"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Login;
