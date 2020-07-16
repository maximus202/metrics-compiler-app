import React from 'react';

import ReachToImpressionsTable from './ReachToImpressionsTable';

const ReachToImpressionsCta = props => {
    let ctaType = '';
    let ctaMetrics = null;

    for (let [key, value] of Object.entries(props.cta)) {
        ctaType = key;
        ctaMetrics = value;
    }

    return (
        <React.Fragment>
            <h5>{ctaType.toUpperCase()}</h5>
            <ReachToImpressionsTable ctaMetrics={ctaMetrics} />
        </React.Fragment>
    );
}

export default ReachToImpressionsCta;