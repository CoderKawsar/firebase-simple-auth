import React from "react";
import useFirebase from "../../hooks/useFirebase";
import Header from "../Header/Header";

const Home = () => {
  const { user } = useFirebase();

  return (
    <div style={{ textAlign: "center" }}>
      <Header></Header>
      <h1>Home</h1>
      <h3>Current User is: {user ? user.displayName : "Unknown"}</h3>
    </div>
  );
};

export default Home;
