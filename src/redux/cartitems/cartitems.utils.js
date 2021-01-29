export const addItemToCart = (cartItems , itemToAdd) => {
    const itemtoAddFromCart = cartItems.find(item => item.id === itemToAdd.id);
    if(itemtoAddFromCart){
        return cartItems.map(cartItem => {
            if(cartItem.id === itemToAdd.id){
                return {...cartItem, quantity: cartItem.quantity+1};
            }else{
                return cartItem
            }
        })
    }
    return [...cartItems, {...itemToAdd, quantity: 1}];
}
export const decreaseItemFromCart = (cartItems, deleteItemFromCart) => {
   const filteredCartItems = cartItems.map(cartItem => (
    cartItem.id == deleteItemFromCart.id ? {...cartItem, quantity: cartItem.quantity-1} : cartItem
   )).filter(item => item.quantity >= 1)

   return filteredCartItems
}



