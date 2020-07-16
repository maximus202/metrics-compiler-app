import React from 'react';

import RevenueCta from './RevenueCta';

const RevenueAudience = props => {
    let audienceName = '';
    let audienceMetrics = null;

    for (let [key, value] of Object.entries(props.audience)) {
        audienceName = key;
        audienceMetrics = value;
    }

    return (
        <React.Fragment>
            <h4>{audienceName.toUpperCase()}</h4>
            {audienceMetrics.map(cta => <RevenueCta cta={cta} />)}
        </React.Fragment>
    );
}

export default RevenueAudience;