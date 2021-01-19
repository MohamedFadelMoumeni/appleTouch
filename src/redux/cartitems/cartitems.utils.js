const addItemToCart = (cartItems , itemToAdd) => {
    const itemtoAddFromCart = cartItems.find(item => item.name === itemToAdd.name);
    if(itemtoAddFromCart){
        return cartItems.map(item => {
            if(item.name === itemToAdd.name){
                return {...item, quantity: item.quantity+1};
            }
        })
    }
    return [...cartItems, {...itemToAdd, quantity: 1}];
}

export default addItemToCart;