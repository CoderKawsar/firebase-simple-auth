import React from "react";
import useFirebase from "../../hooks/useFirebase";
import Header from "../Header/Header";

const Login = () => {
  const { signInWithGoogle } = useFirebase();
  return (
    <div style={{ textAlign: "center" }}>
      <Header />
      <h1>Log in</h1>
      <form>
        <button onClick={signInWithGoogle}>Google Sign in</button>
        <br />
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

export default Login;
