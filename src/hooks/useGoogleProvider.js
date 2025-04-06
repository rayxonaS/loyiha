import { useState } from "react";
import { auth } from "../firebase/config";
import { useGlobalContext } from "./useGlobalContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import toast from "react-hot-toast";

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

      dispatch({ type: "LOGIN", payload: user });
      setData(user);

      toast.success(`Welcome ${user.displayName}`);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    } finally {
      setIsPending(false);
    }
  };

  return { isPending, data, googleProvider };
};
