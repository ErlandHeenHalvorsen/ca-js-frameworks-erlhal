import { useEffect, useState } from "react";
import useAPI from "../hooks/useAPI";
import useProductStore from "./productStore";
import ProductCard from "./ProductCards";
import "./productcards.css";


function FetchStore() {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [allProducts, setAllProducts] = useState([]);

  const { data, loading, error } = useAPI(`https://v2.api.noroff.dev/online-shop/`);
  const setProducts = useProductStore((state) => state.setProducts);
  
  

  useEffect(() => {
    if (data) {
      console.log("Data from API:", data);
      const productsArray = data.data;
      setAllProducts(productsArray);
      setItems(productsArray);
      setProducts(productsArray);
    }
  }, [data, setProducts]);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    if (!query) {
      setItems(allProducts);
    } else {
      const filtered = allProducts.filter((product) => 
        product.title.toLowerCase().includes(query)
      );
      setItems(filtered);
    }
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>

  

  return (
    <>
      <div>
        <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearch}
      />
      </div>
      <div className="product-list">
        {items.map((products) => (
          <ProductCard key={products.id} product={products} />
        ))}
      </div>
    </>
  );
}

export default FetchStore;
