import React from 'react';
import LocationServiceTemplate from '../LocationServiceTemplate';
import { getServiceData } from '../../../data/locationServices';

const FortLauderdaleNewConstruction = () => {
    const cityName = "Fort Lauderdale";
    const serviceSlug = "new-construction";
    const serviceData = getServiceData(serviceSlug, cityName);
    
    return (
        <LocationServiceTemplate
            cityName={cityName}
            serviceData={serviceData}
        />
    );
};

export default FortLauderdaleNewConstruction;

