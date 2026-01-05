const state = {
    isAuthenticated: false,
    user: null,
};

const setAuthState = (authStatus, userData) => {
    state.isAuthenticated = authStatus;
    state.user = userData;
};

const getAuthState = () => {
    return {
        isAuthenticated: state.isAuthenticated,
        user: state.user,
    };
};

export { setAuthState, getAuthState };