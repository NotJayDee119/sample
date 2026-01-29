import React from 'react';
import LocationServiceTemplate from '../LocationServiceTemplate';
import { getServiceData } from '../../../data/locationServices';

const MiamiShoresHomeAdditions = () => {
    const cityName = "Miami Shores";
    const serviceSlug = "home-additions";
    const serviceData = getServiceData(serviceSlug, cityName);
    
    return (
        <LocationServiceTemplate
            cityName={cityName}
            serviceData={serviceData}
        />
    );
};

export default MiamiShoresHomeAdditions;

