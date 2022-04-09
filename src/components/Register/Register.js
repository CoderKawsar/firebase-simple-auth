import React from "react";
import Header from "../Header/Header";

const Register = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Header></Header>
      <h1>Register</h1>
      <form>
        <button>Google Sign in</button>
        <br />
        <br />
        <input type="text" name="" placeholder="Your Name" id="name" />
        <br />
        <input type="email" name="" placeholder="Your Email" id="email" />
        <br />
        <input
          type="password"
          name=""
          placeholder="Your Password"
          id="password"
        />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
