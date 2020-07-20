import React from 'react';

import RevenueAudience from './RevenueAudience';

const Revenue = props => {
    return (
        <React.Fragment>
            <h2>Product Orders and Revenue</h2>
            {props.metrics.map(audience => <RevenueAudience audience={audience} />)}
        </React.Fragment>
    );
}

export default Revenue;