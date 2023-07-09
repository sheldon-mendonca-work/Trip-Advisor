import { useContext } from "react";
import Layout from "../../Layouts/Layout";
import './HomePage.css';
import ProductListCard from "../../Card/ProductListCard/ProductListCard";
import { ContinentContext } from "../../../contexts/ContinentContext";
import { useParams } from "react-router-dom";

const CountryPage = () => {
    const { continentData } = useContext(ContinentContext);
    const { continentID, countryID } = useParams();
    
    const currentContinent = continentData.find((item) => item.id === +continentID);
    const currentCountry = currentContinent.countries.find(item => item.id === +countryID);

    return <Layout>
        <div>
            <div>
                <h2 className="heading2">Top Destinations in {currentCountry.name} for your next holiday</h2>
            </div>
            <ProductListCard data={currentCountry.destinations} preUrl={`/destination/${continentID}/${countryID}/`}/>
        </div>
    </Layout>
}

export default CountryPage;