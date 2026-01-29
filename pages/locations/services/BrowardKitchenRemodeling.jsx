import React from 'react';
import LocationServiceTemplate from '../LocationServiceTemplate';
import { getServiceData } from '../../../data/locationServices';

const BrowardKitchenRemodeling = () => {
    const cityName = "B r o w a r d";
    const serviceSlug = "kitchen-remodeling";
    const serviceData = getServiceData(serviceSlug, cityName);
    
    return (
        <LocationServiceTemplate
            cityName={cityName}
            serviceData={serviceData}
        />
    );
};

export default BrowardKitchenRemodeling;

