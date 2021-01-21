export const addItemToCart = (cartItems , itemToAdd) => {
    const itemtoAddFromCart = cartItems.find(item => item.name === itemToAdd.name);
    if(itemtoAddFromCart){
        return cartItems.map(cartItem => {
            if(cartItem.name === itemToAdd.name){
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
    cartItem.name == deleteItemFromCart.name ? {...cartItem, quantity: cartItem.quantity-1} : cartItem
   )).filter(item => item.quantity >= 1)

   return filteredCartItems
}



