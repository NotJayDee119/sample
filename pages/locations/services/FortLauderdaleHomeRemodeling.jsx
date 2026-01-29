import React from 'react';
import LocationServiceTemplate from '../LocationServiceTemplate';
import { getServiceData } from '../../../data/locationServices';

const FortLauderdaleHomeRemodeling = () => {
    const cityName = "Fort Lauderdale";
    const serviceSlug = "home-remodeling";
    const serviceData = getServiceData(serviceSlug, cityName);
    
    return (
        <LocationServiceTemplate
            cityName={cityName}
            serviceData={serviceData}
        />
    );
};

export default FortLauderdaleHomeRemodeling;

