import { useState } from "react";
import "./App.css";
import Amazon from "./component/Amazon";
import Cart from "./component/Cart";
import Navbar from "./component/Navbar";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  return (
    <>
      <Navbar />
      <Cart />
      <Amazon />
    </>
  );
}

export default App;
