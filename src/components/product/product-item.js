
const ProductItem =({id,title,img,price,model,benefits,addedDate})=>{
    return(
        <li className="col-4">
            <div className="card product-card">
              <img src={img} alt="img" className="card-img-top" />
              <div className="card-body div-body">
                 <h4 className="card-title">{title}</h4>
                <p className="text fw-bocardld fw-template">{price}</p>
                <p className="card-text set"><s>10.000.000</s></p>
                <p className="badge bg-success bg-template">{model}</p>
                <p className="card-text">{addedDate}</p>
        
                <ul className="d-flex flex-wrap list-unstyled temp-list">
                </ul>
        
                <div className="position-absolute top-0 end-0 d-flex temp-btn-div">
                  <button className="btn rounded-0 btn-secondary temp-edit"><i className="fa-solid fa-pen edit-pen"></i></button>
                  <button className="btn rounded-0 btn-danger temp-delete"><i className="fa-solid fa-trash del-pen"></i></button>
                </div>
              </div>
            </div>
          </li>
    )
}
export default ProductItem;