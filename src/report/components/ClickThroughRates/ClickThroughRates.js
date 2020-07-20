import React from 'react';

import ClickThroughRatesAudience from './ClickThroughRatesAudience';

const ClickThroughRates = props => {
    console.log(props.metrics)
    return (
        <React.Fragment>
            <h2>Click Through Rates</h2>
            {props.metrics.map((audience) => <ClickThroughRatesAudience audience={audience} />)}
        </React.Fragment>
    );
}

export default ClickThroughRates;