import React from 'react';

import TopCampaignsClicksTable from './TopCampaignsClicksTable';

const TopCampaignsClicksAudience = props => {
    let audienceName = '';
    let audienceMetrics = null;

    for (let [key, value] of Object.entries(props.audience)) {
        audienceName = key;
        audienceMetrics = value;
    }
    return (
        <React.Fragment>
            <h4>{audienceName.toUpperCase()}</h4>
            <TopCampaignsClicksTable audienceMetrics={audienceMetrics} />
        </React.Fragment>
    )
}

export default TopCampaignsClicksAudience;