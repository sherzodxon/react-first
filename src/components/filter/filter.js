import Field from "../field/field";

const Filter =()=>{
    return(

      <div className="col-3">
        <h2 className="h4 mb-4">Filter</h2>
        <form action="#" className="filter-form">
          <div className="mb-3">
            <label htmlFor="search" id="search" className="form-label">Search</label>
            <input type="search" className="form-control" id="search" placeholder="Falonchi"></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <div className="row">
              {/* <div className="col-6">
                <input type="number" className="form-control" id="from" min="0" aria-label="From" placeholder="From" />
              </div>
              <div className="col-6">
                <input type="number" className="form-control" id="to" min="0" aria-label="To" placeholder="To" />
              </div> */}
              <Field label="From" id="from" type="number" placeholder="e.g.0" />
              <Field label="To" id="to" type="number" placeholder="e.g.100" />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="manufacturer" className="form-label">Manufacturer</label>
            <select className="form-select" id="manufacturer">
              <option value="0">All</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="sortby" className="form-label">Sort by</label>
            <select className="form-select" id="sortby">
              <option value="1">Name</option>
              <option value="2">Price: to lowest</option>
              <option value="3">Price: to highest</option>           
            </select>
          </div>
          <button className="btn btn-primary d-block w-100 py-2">Filter</button>
        </form>
      </div>

    )
}
export default Filter;