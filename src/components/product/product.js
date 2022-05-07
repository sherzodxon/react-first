import ProductItem from "./product-item";

const Product =({products})=>{
    return(
        <section className="col-9">
        <div className="d-flex justify-content-between align-items-baseline">
          <h2 className="h4 mb-4">Products list</h2>
          <p id="count"></p>
        </div>
        <ul id="product-list" className="row list-unstyled g-3">
        {products.map((product)=> <ProductItem id={product.id} title={product.title} img={product.img} price={product.price} model={product.model} benefits={product.benefits} addedDate={product.addedDate} /> )}
        </ul>
        
      </section>
    )
}
export default Product;