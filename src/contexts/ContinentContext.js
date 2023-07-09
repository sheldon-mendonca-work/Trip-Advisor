import { createContext, useState } from "react";
import { data } from "../backend/database";

export const ContinentContext = createContext();

const initContinentData = data.continents;

export const ContinentProvider = ({children}) => {
    const [ continentData, setContinentData ] = useState(initContinentData);
    const [ countryData, setCountryData ] = useState([]);
    const [ destinationData, setDestinationData ] = useState([]);
    
    

    return <ContinentContext.Provider value={{ continentData, setContinentData, countryData, setCountryData, destinationData, setDestinationData }}>
        {children}
    </ContinentContext.Provider>
};