import React from 'react';
import LocationServiceTemplate from '../LocationServiceTemplate';
import { getServiceData } from '../../../data/locationServices';

const MiamiBeachHomeAdditions = () => {
    const cityName = "Miami Beach";
    const serviceSlug = "home-additions";
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

export default MiamiBeachHomeAdditions;
