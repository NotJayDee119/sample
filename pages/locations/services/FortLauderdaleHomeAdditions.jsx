import React from 'react';
import LocationServiceTemplate from '../LocationServiceTemplate';
import { getServiceData } from '../../../data/locationServices';

const FortLauderdaleHomeAdditions = () => {
    const cityName = "F o r t L a u d e r d a l e";
    const serviceSlug = "home-additions";
    const serviceData = getServiceData(serviceSlug, cityName);
    
    return (
        <LocationServiceTemplate
            cityName={cityName}
            serviceData={serviceData}
        />
    );
};

export default FortLauderdaleHomeAdditions;

