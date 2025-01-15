import React, { useEffect, useState } from "react";
import axios from "axios";
import List from "./Listproducts.jsx";
import AddProduct from './addProduct.jsx';
import Update from "./Update.jsx";
import Search from "./search.jsx";

const App = () => {
  const [products, setProducts] = useState([]);
  const [view, setView] = useState("home");
  const [idd, setIdd] = useState(null);
  const [searched, setSearch] = useState("");
  
  console.log("products", products);

  const fetch = () => {
    axios
      .get("http://localhost:3000/api/prod/getall") // fetch url getall
      .then((res) => setProducts(res.data))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetch();
  }, []);

  const handelAdd = (body) => {
    axios
      .post("http://localhost:3000/api/prod/add", body) // fetch url getall
      .then((res) => {
        console.log("added successfully");
        fetch();
      })
      .catch((error) => console.log("error", error));
  };

  const handelDelete = (id) => {
    axios
      .delete(`http://localhost:3000/api/prod/delete/${id}`) // fetch url getall
      .then((res) => {
        console.log("deleted successfully");
        fetch();
      })
      .catch((error) => console.log("error", error));
  };

  const handelUpdate = (body) => {
    axios
      .put(`http://localhost:3000/api/prod/update/${idd}`, body) // fetch url getall
      .then((res) => {
        console.log("updated successfully");
        fetch();
      })
      .catch((error) => console.log("error", error));
  };

  const changeview = (variable) => {
    setView(variable);
  };

  console.log("view", view);

  const getId = (idd) => {
    setIdd(idd);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">Navbar</a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setView("home")}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setView("add")}>Add Product</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setView("update")}>Update Product</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setView("search")}>Search</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearch(e.target.value.toLowerCase())} />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      {view === "add" ? (
        <AddProduct changeview={changeview} handelAdd={handelAdd} />
      ) : view === "home" ? (
        <List getId={getId} changeview={changeview} products={products} handelDelete={handelDelete} />
      ) : view === "update" ? (
        <Update changeview={changeview} handelUpdate={handelUpdate} />
      ) : (
        <Search searched={searched} products={products} />
      )}
    </div>
  );
};

export default App;