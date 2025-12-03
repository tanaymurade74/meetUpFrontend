import { useState } from "react";
import { Link } from "react-router-dom";
const Header = ({search, setSearch}) => {

    const [searchInput, setSearchInput] = useState("")

    const handleKeyDown = (event) => {
        if(event.key === "Enter"){
        event.preventDefault()
        setSearch(searchInput)
        }
        
    }

    const handleChange = (event) => {
        setSearchInput(event.target.value)
        if(event.target.value === ""){
            setSearch("")
        }

    }

    return <header className="container bg-body-tertiary">
        <div className="row p-3">
            <div className="col-6">
        <Link className="fst-italic text-danger" to = "/" ><h1>MeetUp</h1></Link>
      
        </div>
        <div className="col-6 text-end">
            <input className = "p-2 rounded"type = "text" placeholder="Search by name and tags"
            onKeyDown={handleKeyDown}
            onChange={handleChange}/>
        </div>

          <hr/>
        </div>

    </header>
}

export default Header;