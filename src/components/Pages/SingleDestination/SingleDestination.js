import { useContext } from "react";
import Layout from "../../Layouts/Layout";
import './SingleDestination.css';
import { ContinentContext } from "../../../contexts/ContinentContext";
import { useParams } from "react-router-dom";

const SingleDestination = () => {
    const { continentData } = useContext(ContinentContext);
    const { continentID, countryID, destinationID } = useParams();
    
    const currentContinent = continentData.find((item) => item.id === +continentID);
    const currentCountry = currentContinent.countries.find(item => item.id === +countryID);
    const currentDestination = currentCountry.destinations.find(item => item.id === +destinationID);
    console.log(currentDestination)
    return <Layout>
        <div className="singledestination">
        <div className="singledestination-title">
            <h2>{currentDestination.name}</h2>
        </div>
        <div className="singledestination-card">
            <div className="singledestination-img">
                <img src={currentDestination.image} alt={currentDestination.name}/>
            </div>
            <div className="singledestination-content">
                <p><span>Description:</span>{currentDestination.description}</p>
                <p><span>Ratings:</span>{currentDestination.ratings}</p>
                <p><span>Reviews:</span>{currentDestination.reviews}</p>
                <p><span>Location:</span>{currentDestination.location}</p>
                <p><span>Opening Hours:</span>{currentDestination.openingHours}</p>
                <p><span>Ticket Price:</span>${currentDestination.ticketPrice}</p>
                <p><a href={currentDestination.website} 
                target="_blank" rel="noreferrer noopener">
                    Website
                </a></p>
            </div>
        </div>
        </div>
    </Layout>
}

export default SingleDestination;