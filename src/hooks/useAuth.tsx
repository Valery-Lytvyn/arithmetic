import { useState } from "react";
import { useDispatch } from "react-redux";
import { setActiveUser } from "../redux/slice/userDataSlicer";
import { useNavigate } from "react-router-dom";
import { ROUTERS } from "../routing/routers";

function useAuth() {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const setCurrentUser = (
    e?: React.SyntheticEvent | undefined,
    userName?: string | undefined
  ) => {
    e?.preventDefault();
    let currentUser;
    if (!userName || userName.trim().length === 0) {
      currentUser = "user";
    } else {
      currentUser = userName;
    }
    dispatch(setActiveUser(currentUser));
    navigator(ROUTERS.settings);
  };

  const authUser = (e: React.SyntheticEvent) => {
    setCurrentUser(e, userName);
  };

  return {
    userName,
    setUserName,
    authUser,
  };
}

export default useAuth;
