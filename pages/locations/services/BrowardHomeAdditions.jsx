import React from 'react';
import LocationServiceTemplate from '../LocationServiceTemplate';
import { getServiceData } from '../../../data/locationServices';

const BrowardHomeAdditions = () => {
    const cityName = "B r o w a r d";
    const serviceSlug = "home-additions";
    const serviceData = getServiceData(serviceSlug, cityName);
    
    return (
        <LocationServiceTemplate
            cityName={cityName}
            serviceData={serviceData}
        />
    );
};

export default BrowardHomeAdditions;

