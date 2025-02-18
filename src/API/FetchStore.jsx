import { useEffect, useState } from "react";
import "./fetchstore.css";

function FetchStore() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("https://v2.api.noroff.dev/online-shop/");
        const data = await response.json();
        console.log("Fetched data:", data);
        const productsArray = Array.isArray(data.data) ? data.data : [];
        setItems(productsArray);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchItems();
  }, []);

  /* useEffect(() => {
    fetch("https://v2.api.noroff.dev/online-shop/")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data); // Log the data to see its structure
        if (Array.isArray(data.data)) {
          setItems(data.data);
        } else {
          console.error("Data is not an array:", data);
        }
      })
      .catch((error) => console.error(error.message));
  }, []); */

  if (items.length === 0)
    return (
      <div>
        <p>Fetching Store...</p>
      </div>
    );

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
            <button>Buy</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default FetchStore;
