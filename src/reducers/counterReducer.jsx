const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case increment().type:
            return state + action.payload;
        case decrement().type:
            return state - action.payload;
        default:
            return state;
    }
};

export default counterReducer;
