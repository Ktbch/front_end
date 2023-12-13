export const useCommentReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_COMMENT":
      return {  commentsCount: payload.commentsCount };
    default:
      throw new Error("no case here");
  }
};
