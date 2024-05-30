// useCartStore.js
import create from 'zustand';

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) => set((state) => {
    const existingProduct = state.cart.find(item => item.id === product.id);
    const quantity = Number(product.quantity) || 1; // Ensure quantity is a number and defaults to 1 if not provided or invalid
    if (existingProduct) {
      return {
        cart: state.cart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        )
      };
    } else {
      return { cart: [...state.cart, { ...product, quantity }] };
    }
  }),
  removeFromCart: (productId) => set((state) => ({
    cart: state.cart.filter(item => item.id !== productId)
  })),
  updateQuantity: (productId, quantity) => set((state) => ({
    cart: state.cart.map(item =>
      item.id === productId ? { ...item, quantity: Number(quantity) || item.quantity } : item
    )
  })),
  clearCart: () => set({ cart: [] })
}));

export default useCartStore;
