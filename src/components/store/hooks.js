import { useEffect } from "react";
import { useAppDispatch } from ".";
import { useSelector } from "react-redux";
import { setUserData } from "./user";
import { LocalStoragePersistanceService } from "../../persist/LocalStorage";

const localStorage = new LocalStoragePersistanceService();

export const useFetchPublicData = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const user = localStorage.getItem("user");
    const jwt = localStorage.getItem("jwt");

    if (user && jwt) {
      dispatch(setUserData({ user, jwt }));
    }
  }, [dispatch]);
}; // End of use Fetch Public Data

// User
export const useUser = () => {
  return useSelector((state) => state.user);
};
