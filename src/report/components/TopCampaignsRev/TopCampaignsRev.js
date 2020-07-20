import React from 'react';

import TopCampaignsRevAudience from './TopCampaignsRevAudience';

const TopCampaignsRev = props => {
    return (
        <React.Fragment>
        <h2>Top Campaigns by Revenue (Last 14 days)</h2>
        {props.metrics.map(audience => <TopCampaignsRevAudience audience={audience} />)}
        </React.Fragment>
    );
}

export default TopCampaignsRev;