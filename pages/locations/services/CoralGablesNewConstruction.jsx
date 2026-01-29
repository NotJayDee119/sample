import React from 'react';
import LocationServiceTemplate from '../LocationServiceTemplate';
import { getServiceData } from '../../../data/locationServices';

const CoralGablesNewConstruction = () => {
    const cityName = "Coral Gables";
    const serviceSlug = "new-construction";
    const serviceData = getServiceData(serviceSlug, cityName);
    
    return (
        <LocationServiceTemplate
            cityName={cityName}
            serviceData={serviceData}
        />
    );
};

export default CoralGablesNewConstruction;
