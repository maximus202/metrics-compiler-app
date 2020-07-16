import React from 'react';

import ClickThroughRatesCta from './ClickThroughRatesCta';

const ClickThroughRatesAudience = props => {
    let audienceName = '';
    let audience = null;

    for (let [key, value] of Object.entries(props.audience)) {
        audienceName = key;
        audience = value;
    }
    
    return (
        <React.Fragment>
            <h4>{audienceName.toUpperCase()}</h4>
            {audience.map(cta => <ClickThroughRatesCta cta={cta} />)}
        </React.Fragment>
    );
}

export default ClickThroughRatesAudience;