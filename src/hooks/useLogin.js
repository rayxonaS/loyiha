import { useState } from "react";
import { auth } from "../firebase/config";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useGlobalContext } from "./useGlobalContext";
import { useFirestore } from "./useFirestore";

export const useLogin = () => {
  const { dispatch } = useGlobalContext();
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState(null);
  const { updateDocument } = useFirestore("users");

  const login = async (email, password) => {
    try {
      setIsPending(true);
      const req = await signInWithEmailAndPassword(auth, email, password);

      const user = req.user;
      updateDocument(user.uid, {
        online: true,
      });
      toast.success(`Welcome back, ${user.displayName}`);
      dispatch({ type: "LOGIN", payload: user });
      setData(user);
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    } finally {
      setIsPending(false);
    }
  };

  return { isPending, data, login };
};
