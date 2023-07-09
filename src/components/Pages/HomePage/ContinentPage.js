import { useContext } from "react";
import Layout from "../../Layouts/Layout";
import './HomePage.css';
import ProductListCard from "../../Card/ProductListCard/ProductListCard";
import { ContinentContext } from "../../../contexts/ContinentContext";
import { useParams } from "react-router-dom";

const ContinentPage = () => {
    const { continentData } = useContext(ContinentContext);
    const { continentID } = useParams();
    
    const currentContinent = continentData.find((item) => item.id === +continentID);

    return <Layout>
        <div>
            <div>
                <h2 className="heading2">Top Countries in {currentContinent.name} for your next holiday</h2>
            </div>
            <ProductListCard data={currentContinent.countries} preUrl={`/country/${continentID}/`}/>
        </div>
    </Layout>
}

export default ContinentPage;