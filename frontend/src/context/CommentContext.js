import { createContext, useReducer, useContext } from "react";
import { useCommentReducer } from "../reducers/useCommentReducers";

const initialState = {
  commentsCount: 0,
};

const commentContext = createContext(initialState);

export const UseCommentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(useCommentReducer, initialState);
  const initialComments = (commentsCount) => {
    dispatch({
      type: "GET_COMMENT_count",
      payload: {
        commentsCount: commentsCount,
      },
    });
  };
  const value = {
    commentsCount: state.commentsCount,
    initialComments,
  };
  return (
    <commentContext.Provider value={value}>{children}</commentContext.Provider>
  );
};

export const useComment = () => {
  return useContext(commentContext);
};
