import { useEffect, useState } from "react";
import useAPI from "../hooks/useAPI";
import useProductStore from "./productStore";
import ProductCard from "./ProductCards";
import "./productcards.css";


function FetchStore() {
  const [items, setItems] = useState([]);
  const { data, loading, error } = useAPI("https://v2.api.noroff.dev/online-shop/");
  const setProducts = useProductStore((state) => state.setProducts);
  const addToCart = useProductStore((state) => state.addToCart);
  const cart = useProductStore((state) => state.shoppingCart);
  

  useEffect(() => {
    if (data) {
      console.log("Data from API:", data);
      const productsArray = data.data;
      setItems(productsArray);
      setProducts(productsArray);
    }
  }, [data, setProducts]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>
  

  return (
    <>
      <div className="product-list">
        {items.map((products) => (
          <ProductCard key={products.id} product={products} />
        ))}
      </div>
    </>
  );
}

export default FetchStore;
