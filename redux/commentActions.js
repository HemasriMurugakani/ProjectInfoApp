// redux/commentActions.js
export const ADD_COMMENT = 'ADD_COMMENT';

export const addComment = (comment) => ({
  type: ADD_COMMENT,
  payload: comment,
});
