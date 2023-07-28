// blogParameterReducer.js
const initialState: number = 1;

const footerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FOOTER_MENU':
            return action.active;
        default:
            return state;
    }
};

export default footerReducer;