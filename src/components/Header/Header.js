import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./Header.css";

const Header = () => {
  const { user, handleSignOut } = useFirebase();
  return (
    <nav>
      <Link to="/">Home</Link>
      {user?.uid ? (
        <a onClick={handleSignOut} href="/">
          ({user.displayName})Sign out
        </a>
      ) : (
        <Link to="/login">Login</Link>
      )}
      <Link to="/register">Register</Link>
    </nav>
  );
};

export default Header;
