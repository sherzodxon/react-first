const Modal =()=>{
    return (
        <div className="modal fade" id="edit-student-modal" tabIndex="-1" aria-labelledby="editStudentModalLabel"
    aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="editStudentModalLabel">Add product</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <form id="add-modal-form">
            <div className="mb-3">
              <label htmlFor="product-title" className="form-label">Title</label>
              <input type="text" className="form-control" id="product-title" placeholder="Falon telefon" />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">Narxi</label>
              <input type="number" className="form-control" id="price" placeholder="12400000" />
            </div>
            <div className="mb-3">
              <label htmlFor="product-manufacturer" className="form-label">Manufacturer</label>
              <select className="form-select" id="product-manufacturer">
                <option defaultValue={`Select a manufacturer`}></option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="benefits" className="form-label">Benefits</label>
              <input type="text" className="form-control" id="benefits" placeholder="150" />

              <ul className="d-flex flex-wrap list-unstyled mt-3" id="split-list">
                <li className="me-1 mb-1"><button type="button"
                    className="btn btn-sm badge rounded-pill btn-danger">8gb</button></li>
                <li className="me-1 mb-1"><button type="button"
                    className="btn btn-sm badge rounded-pill btn-danger">128gb</button></li>
                <li className="me-1 mb-1"><button type="button"
                    className="btn btn-sm badge rounded-pill btn-danger">Waterproof</button></li>
                <li className="me-1 mb-1"><button type="button" className="btn btn-sm badge rounded-pill btn-danger">Falon
                    yaxshi tarafi</button></li>
              </ul>
            </div>
            <button type="submit" className="btn btn-primary d-block w-100 p-2">Add product</button>
          </form>
        </div>
      </div>
    </div>
  </div>
    )
}
export default Modal;