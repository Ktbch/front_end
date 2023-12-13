import { createContext, useContext, useReducer } from "react";
import { useLikeReducer } from "../reducers";

const initialState = {
  isLiked: false,
  likeCount: 0,
};

// create context

const useLikeContext = createContext(initialState);

export const UseLikeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(useLikeReducer, initialState);

  const fetchLikes = async (postId, requestOptions) => {
    try {
      const response = await fetch(
        `https://api-v2-fyq5.onrender.com/api/v2/likes/${postId}`,
        requestOptions
      );
      if (!response.ok) {
        throw new Error(response.status);
      }
      const res = await response.json();
      dispatch({
        type: "SET_LIKED",
        payload: {
          isLiked: res.isLiked,
          likeCount: res.likeCount,
        },
      });
    } catch (error) {
      throw new Error("could not fetch updated count", error);
    }
  };
  const value = {
    isLiked: state.isLiked,
    likeCount: state.likeCount,
    fetchLikes,
  };
  return (
    <useLikeContext.Provider value={value}>{children}</useLikeContext.Provider>
  );
};

export const useLike = () => {
  return useContext(useLikeContext);
};
