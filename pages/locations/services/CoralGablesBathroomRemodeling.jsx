import React from 'react';
import LocationServiceTemplate from '../LocationServiceTemplate';
import { getServiceData } from '../../../data/locationServices';

const CoralGablesBathroomRemodeling = () => {
    const cityName = "Coral Gables";
    const serviceSlug = "bathroom-remodeling";
    const serviceData = getServiceData(serviceSlug, cityName);
    
    return (
        <LocationServiceTemplate
            cityName={cityName}
            serviceData={serviceData}
        />
    );
};

export default CoralGablesBathroomRemodeling;

