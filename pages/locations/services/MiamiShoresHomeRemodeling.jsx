import React from 'react';
import LocationServiceTemplate from '../LocationServiceTemplate';
import { getServiceData } from '../../../data/locationServices';

const MiamiShoresHomeRemodeling = () => {
    const cityName = "Miami Shores";
    const serviceSlug = "home-remodeling";
    const serviceData = getServiceData(serviceSlug, cityName);
    
    return (
        <LocationServiceTemplate
            cityName={cityName}
            serviceData={serviceData}
        />
    );
};

export default MiamiShoresHomeRemodeling;

