import React from 'react';

import RevenueAudience from './RevenueAudience';

const Revenue = props => {
    return (
        <React.Fragment>
            <h3>Product Orders and Revenue</h3>
            {props.metrics.map(audience => <RevenueAudience audience={audience} />)}
        </React.Fragment>
    );
}

export default Revenue;