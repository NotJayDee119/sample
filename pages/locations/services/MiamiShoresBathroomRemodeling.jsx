import React from 'react';
import LocationServiceTemplate from '../LocationServiceTemplate';
import { getServiceData } from '../../../data/locationServices';

const MiamiShoresBathroomRemodeling = () => {
    const cityName = "M i a m i S h o r e s";
    const serviceSlug = "bathroom-remodeling";
    const serviceData = getServiceData(serviceSlug, cityName);
    
    return (
        <LocationServiceTemplate
            cityName={cityName}
            serviceData={serviceData}
        />
    );
};

export default MiamiShoresBathroomRemodeling;

