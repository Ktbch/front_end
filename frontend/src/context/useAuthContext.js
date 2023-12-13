import { createContext, useContext, useReducer } from "react";
import { useAuthReducer } from "../reducers/useAuthReducers";

const initialState = {
  accessToken: "",
  username: "",
  id: 0,
};

const useAuthContext = createContext(initialState);

export const UseAuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(useAuthReducer, initialState);

  const addToken = (token, username, id) => {
    dispatch({
      type: "ADD_TOKEN",
      payload: {
        accessToken: token,
      },
    });
  };

  const getUserLoggedInUser = async (token) => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token.toString()}`,
      },
    };
    try {
      const response = await fetch(
        "http://localhost:8080/api/v2/users/users",
        requestOptions
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const { userId, username } = await response.json();
      dispatch({
        type: "GET_USER_INFO",
        payload: {
          username: username,
          id: userId,
        },
      });
      return;
    } catch (error) {
      console.error("could not fetch the authenticated users", error);
      throw error.message;
    }
  };

  const logOut = () => {
    dispatch({
      type: "CLEAR_TOKEN",
      payload: {
        accessToken: null,
        username: null,
        id: null,
      },
    });
    localStorage.clear("token");
    return;
  };

  const value = {
    accessToken: state.accessToken,
    username: state.username,
    id: state.id,
    addToken,
    getUserLoggedInUser,
    logOut,
  };
  return (
    <useAuthContext.Provider value={value}>{children}</useAuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(useAuthContext);
};
