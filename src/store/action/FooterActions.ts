// parameterActions.js
export const SET_FOOTER_MENU = 'SET_FOOTER_MENU';

export const switchFooterMenu = (parameter) => ({
    type: SET_FOOTER_MENU,
    active: parameter,
});