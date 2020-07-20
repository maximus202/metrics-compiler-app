import React from 'react';

import TopCampaignsRevTable from './TopCampaignsRevTable';

const TopCampaignsRevAudience = props => {
    let audienceName = '';
    let audienceMetrics = null;

    for (let [key, value] of Object.entries(props.audience)) {
        audienceName = key;
        audienceMetrics = value;
    }

    return (
        <React.Fragment>
            <h4>{audienceName.toUpperCase()}</h4>
            <TopCampaignsRevTable audienceMetrics={audienceMetrics} />
        </React.Fragment>
    );
}

export default TopCampaignsRevAudience;