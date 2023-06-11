import React from "react";
import "./css/login.css";



function Login() {
  // const signIn = () =>{
  //   auth.signInWithPopup(provider).then(result => {
  //     console.log(result)
  //   }).catch(error => console.log(error))
  // }
  return (
    <div className="login_wrapper">
      <div className="login">
        <img
          src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
          alt=""
        />
        <h2>sign in with facebook</h2>
        <button >Login with facebook</button>
      </div>
    </div>
  );
}

export default Login;
