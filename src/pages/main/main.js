import { useState } from "react"
import Filter from "../../components/filter/filter"
import Header from "../../components/header/header"
import Modal from "../../components/modal/modal"
import Product from "../../components/product/product"
import { products as productsData } from "../../data"

const Main =()=>{ 
    const [isModalOpen,setModalOpen]=useState(false);
    const [products, setProducts ] = useState(productsData);

    return(
    <>
      <div className="container my-5">
      <Header setModalOpen={setModalOpen} />
      <div className="row mt-5">
      <Filter products={products} />
      <Product products={products} />
      </div>
      </div>
      <Modal isOpen={isModalOpen} close={setModalOpen} products={products} setProducts={setProducts} />
    </>
    )
}

export default Main;