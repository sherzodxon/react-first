const Header = ({setModalOpen}) =>{
  const hanldeModalOpenClick = () => {
    setModalOpen(true);
  } 
    return(
      <div className="d-flex justify-content-between">
      <h1 className="h2">Gilos.uz/smartphones</h1>

      <button className="btn btn-primary px-4" data-bs-toggle="modal" data-bs-target="#edit-student-modal" onClick={hanldeModalOpenClick}>
        <span className="me-2">Add product</span>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
    )
}

export default Header;
