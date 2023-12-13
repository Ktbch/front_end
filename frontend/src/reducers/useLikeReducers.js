export const useLikeReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_LIKED":
      return { isLiked: payload.isLiked, likeCount: payload.likeCount };
    default:
      throw new Error("no case here");
  }
};
