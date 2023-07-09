import { useContext } from "react";
import Layout from "../../Layouts/Layout";
import './HomePage.css';
import ProductListCard from "../../Card/ProductListCard/ProductListCard";
import { ContinentContext } from "../../../contexts/ContinentContext";

const HomePage = () => {
    const { continentData } = useContext(ContinentContext);

    return <Layout>
        <div>
            <div>
                <h2 className="heading2">Top Continents for your next holiday</h2>
            </div>
            <ProductListCard data={continentData} preUrl={'/continent/'}/>
        </div>
    </Layout>
}

export default HomePage;