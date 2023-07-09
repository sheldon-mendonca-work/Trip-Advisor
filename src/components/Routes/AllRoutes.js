import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import SingleDestination from "../Pages/SingleDestination/SingleDestination";
import ContinentPage from "../Pages/HomePage/ContinentPage";
import CountryPage from "../Pages/HomePage/CountryPage";

const AllRoutes = () => {
    return <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/continent/:continentID" element={<ContinentPage />} />
        <Route path="/country/:continentID/:countryID" element={<CountryPage />} />
        <Route path="/destination/:continentID/:countryID/:destinationID" element={<SingleDestination />} />
        <Route path="*" element={<HomePage />} />
    </Routes>
}

export default AllRoutes;