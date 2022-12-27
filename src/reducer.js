// What the data layer looks like
export const initialState = {
    basket: [],
};

// How to manipulate the data in the data layer
// The ability to dispatch the actions into the data layer
const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        
        default:
                return state;
    }
};
    
export default reducer;