import { useEffect, useState } from "react";
import "./styles.css";
import Products from "./products";
import Pagination from "./pagination";

export default function App() {
  const [prod, setProd] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    console.log("effect");
    fetchData();
  }, []);
  async function fetchData() {
    const resp = await fetch("https://dummyjson.com/products");
    const data = await resp.json();
    console.log(data);
    if (data.products && data.products.length > 0) {
      setProd(data);
    }
    // return data;
  }
  const setNewPage = (clickedPage) => {
    setPage(clickedPage);
  };
  return (
    <div className="App">
      <Products prod={prod} page={page} />
      <Pagination
        total={prod.products && prod.products.length ? prod.products.length : 0}
        page={page}
        setNewPage={setNewPage}
      />
    </div>
  );
}
