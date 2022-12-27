// What the data layer looks like
export const initialState = {
    basket: [],
};

//Selector
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0)

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
        
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id == action.id
            );

            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product. (id: ${action.id}) not in basket.`
                )
            }

            return {
                ...state,
                basket: newBasket
            }
        
        default:
                return state;
    }
};
    
export default reducer;