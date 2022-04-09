import { useEffect, useState } from "react";
import app from "../firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  signOut,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  const signInWithGoogle = (e) => {
    e.preventDefault();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleSignOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return { user, signInWithGoogle, handleSignOut };
};

export default useFirebase;
