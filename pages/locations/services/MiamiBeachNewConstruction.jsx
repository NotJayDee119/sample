import React from 'react';
import LocationServiceTemplate from '../LocationServiceTemplate';
import { getServiceData } from '../../../data/locationServices';

const MiamiBeachNewConstruction = () => {
    const cityName = "Miami Beach";
    const serviceSlug = "new-construction";
    const serviceData = getServiceData(serviceSlug, cityName);
    
    return (
        <LocationServiceTemplate
            cityName={cityName}
            serviceData={serviceData}
        />
    );
};

export default MiamiBeachNewConstruction;

