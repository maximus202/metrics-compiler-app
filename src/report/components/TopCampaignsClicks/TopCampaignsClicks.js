import React from 'react';

import TopCampaignsClicksAudience from './TopCampaignsClicksAudience';

const TopCampaignsClicks = props => {
    return (
        <React.Fragment>
        <h2>Top Campaigns by Clicks (Last 14 days)</h2>
        {props.metrics.map(audience => <TopCampaignsClicksAudience audience={audience} />)}
        </React.Fragment>
    );
};

export default TopCampaignsClicks;