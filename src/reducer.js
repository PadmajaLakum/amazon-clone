export const initialState= {
    basket:[],
        

    user:null,
};

export const getBasketTotal = (basket) =>
basket?.reduce((amount,item) => item.price+amount,0);

const reducer=(state,action) => {
    switch(action.type) {
        case 'SET USER':
            return {
                ...state,
                user:action.user
            }
        case 'ADD TO BASKET':
            return {
                ...state,
                basket:[...state.basket,action.item]
            };
        
        case 'REMOVE FROM BASKET':
            let newBasket=[...state.basket];
            const index=state.basket.findIndex((basketItem)=>basketItem.id===action.id);
            if (index >=0) {
               newBasket.splice(index,1)
            }
            else {
              console.warn(`cannot remove product (id: ${action.id}) as it is no longer in the basket`);

            }
            return {...state,basket:newBasket}
        
        default:
            return state;
    }
}

export default reducer;