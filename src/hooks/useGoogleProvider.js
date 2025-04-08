import { useState } from "react";
import { auth, db } from "../firebase/config";
import { useGlobalContext } from "./useGlobalContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import toast from "react-hot-toast";
import { setDoc, doc } from "firebase/firestore";

export const useGoogleProvider = () => {
  const { dispatch } = useGlobalContext();
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState(null);

  const googleProvider = async () => {
    try {
      setIsPending(true);
      const provider = new GoogleAuthProvider();
      const req = await signInWithPopup(auth, provider);
      const user = req.user;
      await setDoc(doc(db, "users", user.uid), {
        displayName: user.displayName,
        photoURL: user.photoURL,
        online: true,
      });
      toast.success(`Welcome ${user.displayName}`);
      dispatch({ type: "LOGIN", payload: user });
      setData(user);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    } finally {
      setIsPending(false);
    }
  };

  return { isPending, data, googleProvider };
};
