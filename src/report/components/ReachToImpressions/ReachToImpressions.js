import React from 'react';

import ReachToImpressionsAudience from './ReachToImpressionsAudience';

const ReachToImpressions = props => {
    return (
        <React.Fragment>
            <h3>Reach To Impressions</h3>
            {props.metrics.map(audience => <ReachToImpressionsAudience audience={audience} />)}
        </React.Fragment>
    )
};

export default ReachToImpressions;