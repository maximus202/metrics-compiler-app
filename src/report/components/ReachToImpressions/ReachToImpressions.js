import React from 'react';

import ReachToImpressionsAudience from './ReachToImpressionsAudience';

const ReachToImpressions = props => {
    return (
        <React.Fragment>
            <h2>Reach To Impressions</h2>
            {props.metrics.map(audience => <ReachToImpressionsAudience audience={audience} />)}
        </React.Fragment>
    )
};

export default ReachToImpressions;