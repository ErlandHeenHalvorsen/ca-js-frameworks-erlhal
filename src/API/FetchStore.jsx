import { useEffect, useState } from "react";
import useAPI from "../hooks/useAPI";
import useProductStore from "../components/productStore";
import "./fetchstore.css";

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
      {items.map((item) => (
        <div className="store-element" key={item.id}>
          <div>
            <img src={item.image.url} alt="" />
          </div>
          <div>
            <h1>{item.title}</h1>
          </div>
          <div>
            <p>${item.price}</p>
            <button onClick={() => addToCart(item)}>Add to cart</button>
          </div>
          <p>Cart: {cart.length}</p>
        </div>
      ))}
    </>
  );
}

export default FetchStore;
