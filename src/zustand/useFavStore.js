import create from "zustand";

const useFavorites = create((set) => {
  const STORAGE_KEY = "favorites";

  // Function to get liked items from local storage (if available)
  const getFavorites = () => {
    try {
      const likedItems = localStorage.getItem(STORAGE_KEY);
      if (likedItems) {
        return JSON.parse(likedItems);
      }
      return [];
    } catch (err) {
      console.log("Error Fetching favorite items");
      return [];
    }
  };

  // Function to set liked items in local storage
  const setFavorite = (likedItem) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(likedItem));
    } catch (err) {
      console.error("Error saving cart to local storage:", err);
    }
  };

  // Initial state with cart loaded from local storage
  const initialState = {
    favorite: getFavorites(),
  };

  return {
    ...initialState,
    addToFavorite: (product) =>
      set((state) => {
        const existingProduct = state.favorite.find(
          (item) => item.id === product.id
        );

        let newLikes;
        if (existingProduct) {
          newLikes = state.favorite.filter((items) => items.id !== product.id);
        } else {
          newLikes = [...state.favorite, { ...product }];
        }

        setFavorite(newLikes);
        return { favorite: newLikes };
      }),
  };
});

export default useFavorites;
