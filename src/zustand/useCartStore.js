import create from "zustand";

const useCartStore = create((set) => {
  const STORAGE_KEY = "cartItems";

  // Function to get cart items from local storage (if available)
  const getCartFromStorage = () => {
    try {
      const storedItems = localStorage.getItem(STORAGE_KEY);
      if (storedItems) {
        return JSON.parse(storedItems);
      }
      return [];
    } catch (error) {
      console.error("Error retrieving cart from local storage:", error);
      return [];
    }
  };

  // Function to set cart items in local storage
  const setCartInStorage = (cartItems) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
    } catch (error) {
      console.error("Error saving cart to local storage:", error);
    }
  };

  // Initial state with cart loaded from local storage
  const initialState = {
    cart: getCartFromStorage(),
  };

  return {
    ...initialState,
    addToCart: (product) =>
      set((state) => {
        const existingProduct = state.cart.find(
          (item) => item.id === product.id
        );
        const quantity = Number(product.quantity) || 1;
        let newCart;
        if (existingProduct) {
          newCart = state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        } else {
          newCart = [...state.cart, { ...product, quantity }];
        }
        setCartInStorage(newCart);
        return { cart: newCart };
      }),
    removeFromCart: (productId) =>
      set((state) => {
        const newCart = state.cart.filter((item) => item.id !== productId);
        setCartInStorage(newCart);
        return { cart: newCart };
      }),
    updateQuantity: (productId, quantity) =>
      set((state) => {
        const newCart = state.cart.map((item) =>
          item.id === productId
            ? { ...item, quantity: Number(quantity) || item.quantity }
            : item
        );
        setCartInStorage(newCart);
        return { cart: newCart };
      }),
    clearCart: () =>
      set(() => {
        const newCart = [];
        setCartInStorage(newCart);
        return { cart: newCart };
      }),
  };
});

export default useCartStore;
