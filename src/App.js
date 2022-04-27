import Header from  "./components/header/header";
import Filter from "./components/filter/filter";
import Modal from "./components/modal/modal";
import Product from "./components/product/product";

import "./assets/css/bootstrap.min.css";

function App() {
  return (
    <div>
    <div className="container my-5">
    <Header />
    <div className="row mt-5">
    <Filter />
    <Product />
    </div>
    </div>
    <Modal />
    </div>
    
  );
}

export default App;
