import React from 'react';

import RevenueTable from './RevenueTable';

const RevenueCta = props => {
    let ctaType = '';
    let ctaMetrics = null;
    
    for (let [key, value] of Object.entries(props.cta)) {
        ctaType = key;
        ctaMetrics = value;
    }

    return (
        <React.Fragment>
            <h5>{ctaType.toUpperCase()}</h5>
            <RevenueTable metrics={ctaMetrics} />
        </React.Fragment>
    );
}

export default RevenueCta;