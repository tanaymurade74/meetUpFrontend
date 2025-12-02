import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { Link } from "react-router-dom";
const EventDetails = () => {

    const param = useParams();
    const name = encodeURIComponent(param.eventName);
    console.log(name)

    const {data, loading, error} = useFetch(`${process.env.REACT_APP_API_URL}/events/name/${name}`)

    console.log(data);
    return <div className="container bg-body-tertiary mt-3 py-4">
    <header>
         <div className="row p-3">
            <div className="col-6">
        <Link className="fst-italic text-danger" to = "/"><h1>MeetUp</h1></Link>
      
        </div>
        </div>
    </header>
    <main >
       {data?.map(data => (
        <div className="row">
            <div className="col-12 col-md-6 mb-4">
        <h2>{data.name}</h2>
        <>Hosted By:</><br/>
        <strong>{data.hostedBy}</strong><br/><br/>
        <img src = {data.eventImageUrl} style ={{ width : "100%" , height: "250px", objectFit: "cover"}}/><br/><br/>
        <h3>Details: </h3>
        <p>{data.details}</p>
        {data.dressCode || data.ageRestrictions ? <>
        <h3>Additional Information: </h3>
        <strong>Dress Code: </strong> {data.dressCode}<br/>
        <strong>Age Restrictions: </strong>{data.ageRestrictions}<br/><br/>
        </>: ""}
        <h3>Event Tags:</h3>
        {data.eventTags.map(item => (
            <>
            <p className="btn btn-success">{item}</p>
            <>&nbsp; &nbsp;</>
</>
        ))}
        </div>
        <div className="col-12 col-md-6 mb-4">
            <div className="card p-3 mt-4">
                <h6><strong>Time: </strong>{data.date} at {data.startTime} to {data.date} at {data.endTime}</h6><br/>
                <h6><strong>Venue: </strong>{data.venue}</h6><br/>
                <h6><strong>Price: </strong>{data.price ? data.price: "Free"}</h6>
            </div><br/><br/>
            <h3>Speakers: ({data.speakers.length})</h3>
            <div className="row">
                {data.speakers.map(item => (
                    <div className="col-12 col-sm-6">
                    <div className="card p-3 mt-4">
                        <img className = "img-fluid rounded-circle"src = {item.speakerImageUrl} style ={{height: "200px", objectFit: "cover"}}/><br/>
                        <strong>{item.name}</strong>
                        <p>{item.designation}</p>
                    </div>
                </div>
                ))}
                
            </div>
        </div>
        </div>
        )) }
      
    </main>
    </div>
}

export default EventDetails;