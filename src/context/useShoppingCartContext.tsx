import React, { createContext, useContext, useState } from "react";

type TShoppingCartProvider = {
  children: React.ReactNode;
};

interface CartItem {
  id: number;
  quantity: number;
}

type TShoppingCartContext = {
  cartItems: CartItem[];
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
};

export const ShoppingCartContext = createContext({} as TShoppingCartContext);

export function useShoppingCartContext() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: TShoppingCartProvider) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const cartQuantity = cartItems.reduce((quantity, item)=> item.quantity + quantity, 0)

  function openCart() {
    setIsOpen(true);
  }

  function closeCart() {
    setIsOpen(false);
  }

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    setCartItems((currentItem) => {
      let selectedItem = currentItem.find((item) => item.id === id);
      if (selectedItem == null)
        return [...currentItem, { id: id, quantity: 1 }];
      else
        return currentItem.map((item) => {
          if (item.id === id) return { ...item, quantity: item.quantity + 1 };
          else return item;
        });
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartItems((currentItem) => {
      let selectedItem = currentItem.find((item) => item.id === id);
      if (selectedItem?.quantity == 1)
        return currentItem.filter((item) => item.id !== id);
      else
        return currentItem.map((item) => {
          if (item.id === id) return { ...item, quantity: item.quantity - 1 };
          else return item;
        });
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currentItem) => currentItem.filter((item) => item.id !== id));
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        openCart,
        closeCart,
        cartQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
