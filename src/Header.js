import { useState } from "react";
import { Link } from "react-router-dom";
const Header = ({search, setSearch}) => {

    const [searchInput, setSearchInput] = useState("")

    // const handleKeyDown = (event) => {
    //     if(event.key === "Enter"){
    //     event.preventDefault()
    //     setSearch(searchInput)
    //     }
        
    // }

    // const handleChange = (event) => {
    //     setSearchInput(event.target.value)
    //     if(event.target.value === ""){
    //         setSearch("")
    //     }

    // }

    return (
  <header className="bg-body-tertiary">
    <div className="container">
      <div className="row p-3 align-items-center gy-2">
        <div className="col-12 col-md-4">
          <Link className="fst-italic text-danger text-decoration-none" to="/">
            <h1 className="h3 mb-0">MeetUp</h1>
          </Link>
        </div>
        <div className="col-12 col-md-8 text-md-end">
          <input
            className="p-2 rounded "
            type="text"
            placeholder="Search by name and tags"
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
      </div>
      <hr className="mt-0 mb-0" />
    </div>
  </header>
);

}

export default Header;