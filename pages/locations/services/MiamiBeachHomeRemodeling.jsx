import React from 'react';
import LocationServiceTemplate from '../LocationServiceTemplate';
import { getServiceData } from '../../../data/locationServices';

const MiamiBeachHomeRemodeling = () => {
    const cityName = "M i a m i B e a c h";
    const serviceSlug = "home-remodeling";
    const serviceData = getServiceData(serviceSlug, cityName);
    
    return (
        <LocationServiceTemplate
            cityName={cityName}
            serviceData={serviceData}
        />
    );
};

export default MiamiBeachHomeRemodeling;

