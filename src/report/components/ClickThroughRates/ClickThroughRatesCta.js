import React from 'react';

import ClickThroughRatesTable from './ClickThroughRatesTable';

const ClickThroughRateCta = props => {
    let ctaType = '';
    let ctaMetrics = null;

    for (let [key, value] of Object.entries(props.cta)) {
        ctaType = key;
        ctaMetrics = value;
    }

    return (
        <React.Fragment>
        <h5>{ctaType.toUpperCase()}</h5>
        <ClickThroughRatesTable ctaMetrics={ctaMetrics} />
        </React.Fragment>
);
}

export default ClickThroughRateCta;