const selectUser = (state) => state.auth.user;

const selectUserId = (state) => state.auth.userId;

const selectStateChanged = (state) => state.auth.stateChange;

export { selectUser, selectUserId, selectStateChanged };