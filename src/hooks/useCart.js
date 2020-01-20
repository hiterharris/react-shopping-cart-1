import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import data from '../data';

export const useCart = () => {
  const [cart, setCart] = useLocalStorage(data);

    const addItem = (item) => {
        setCart([...cart, item]);
    };
    
    const removeItem = (itemId) => {
        const updateCart = cart.filter(item => item.id !== itemId);
        setCart(updateCart);
    }

  return [cart, setCart, addItem, removeItem];
};