import React from 'react';

import UnsubscribesByCampaignAudience from './UnsubscribesByCampaignAudience';

const UnsubscribesByCampaign = props => {
    return (
        <React.Fragment>
            <h2>Unsubscribes by Campaign (Last 14 days)</h2>
            {props.metrics.map(audience => <UnsubscribesByCampaignAudience audience={audience} />)}
        </React.Fragment>
    );
}

export default UnsubscribesByCampaign;