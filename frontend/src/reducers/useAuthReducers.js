export const useAuthReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TOKEN":
      return {
        ...state,
        accessToken: payload.accessToken,
      };
    case "CLEAR_TOKEN":
      return {
        accessToken: payload.accessToken,
        username: payload.username,
        id: payload.id,
      };
    case "GET_USER_INFO":
      return {
        ...state,
        username: payload.username,
        id: payload.id,
      };

    default:
      throw new Error("could not set Tokken");
  }
};
