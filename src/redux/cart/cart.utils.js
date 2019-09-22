export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(cartItem => {
    return cartItem.id === cartItemToAdd.id;
  });

  if (existingCartItem) {
    return cartItems.map(cartItem => {
      return cartItem.id === existingCartItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemToCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(cartItem => {
    return cartItem.id === cartItemToRemove.id;
  });

  if (existingCartItem.quantity > 1) {
    return cartItems.map(cartItem => {
      return cartItem.id === existingCartItem.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem;
    });
  }

  return cartItems.filter(item => item.id !== cartItemToRemove.id);
};
