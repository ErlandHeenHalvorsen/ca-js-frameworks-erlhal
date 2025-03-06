import { create } from "zustand";
import { persist } from "zustand/middleware";

const useProductStore = create(
    persist(
        (set) => ({
            products: [],
            shoppingCart: [],

            setProducts: (products) => set({ products }),
            filterProducts: (query) =>
                set((state) => ({
                    products: state.products.filter((product) =>
                        product.title.toLowerCase().includes(query.toLowerCase())
                    ),
                })),
            addToCart: (products) =>
                set((state) => ({
                    shoppingCart: state.shoppingCart.find((f) => f.id === products.id)
                        ? state.shoppingCart
                        : [...state.shoppingCart, products],
                })),
            removeFromCart: (productId) =>
                set((state) => ({
                    shoppingCart: state.shoppingCart.filter((product) => product.id !== productId),
                })),
            
        }), {
        name: "product-store",
    }
    )
);

export default useProductStore;