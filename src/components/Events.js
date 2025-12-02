import useFetch from "../useFetch";
import {Link} from "react-router-dom"
import Header from "../Header";
import { useState } from "react";
const Events = () => {
    const[eventType, setEventType] = useState("both")
    const[search, setSearch] = useState("");

    const apiUrl = search === "" ? `${process.env.REACT_APP_API_URL}/events/type/${eventType}` : 
                  `${process.env.REACT_APP_API_URL}/events/search/${search}`


    const {data, loading, error} = useFetch(apiUrl)
    console.log(data);

    return <div className="container bg-body-tertiary">
    <Header search = {search} setSearch = {setSearch}/>
    <main >
        <div className="row">
        <div className="col-6">
        <h1>MeetUp Events</h1><br/>
        </div>
        <div className="col-6 text-end">
            <select className="p-2 rounded text-body-tertiary" 
            onChange = {(event) => setEventType(event.target.value) }>
                <option value = "both"   >Select event type</option>
                <option value = "online">Online</option>
                <option value = "offline">Offline</option>
                <option value = "both">Both</option>
            </select>
        </div>
        </div>
        <div className="row">
        {data?.map((item) => (
            <div className="col-md-4 mb-4" key={item._id}>
                <Link to = {`/events/${item.name}`} >
                <div className="card">
                  <img src={item.eventImageUrl} className="card-img img-fluid" alt="event" style={{ height: "300px", objectFit: "cover" }}/>
                  <div className="card-img-overlay">
                    <p className="btn btn-light text-danger"> {item.eventType === "both"? "online/offline" : item.eventType}</p>
                  </div>
                  <div className="card-body">
                        <p className="card-text"> {item.date} {item.startTime} IST</p>
                      <p className="card-text"><strong>{item.name}</strong></p>
                  </div>  
                </div>
                </Link>
            </div>
           
        ))}
        </div>
        
       
            
        </main>
        
    </div>
}

export default Events;