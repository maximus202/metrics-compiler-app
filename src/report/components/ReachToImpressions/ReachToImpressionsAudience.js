import React from 'react';

import ReachToImpressionsCta from './ReachToImpressionsCta';

const ReachToImpressionsAudience = props => {
    let audienceName = '';
    let audience = null;

    for (const [key, value] of Object.entries(props.audience)) {
        audienceName = key;
        audience = value;
    }
    
    return (
        <React.Fragment>
            <h4>{audienceName.toUpperCase()}</h4>
            {audience.map((cta) => <ReachToImpressionsCta cta={cta} />)}
        </React.Fragment>
    );
}

export default ReachToImpressionsAudience;