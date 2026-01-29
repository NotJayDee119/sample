import React from 'react';
import LocationServiceTemplate from '../LocationServiceTemplate';
import { getServiceData } from '../../../data/locationServices';

const MiamiBeachHomeRemodeling = () => {
    const cityName = "Miami Beach";
    const serviceSlug = "home-remodeling";
    const serviceData = getServiceData(serviceSlug, cityName);

    return (
        <LocationServiceTemplate
            cityName={cityName}
            serviceName={serviceData.serviceName}
            serviceSlug={serviceSlug}
            serviceData={serviceData}
        />
    );
};

export default MiamiBeachHomeRemodeling;
