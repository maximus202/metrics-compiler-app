import React from 'react';

import TopCampaignsRevRow from './TopCampaignsRevRow';

const TopCampaignsRevTable = props => {
    return (
        <table>
            <tr>
                <th>Send Date</th>
                <th>Campaign Name</th>
                <th>Reach</th>
                <th>Clicks</th>
                <th>Orders</th>
                <th>Purchase Average</th>
                <th>Revenue</th>
            </tr>
            {props.audienceMetrics.map(row => <TopCampaignsRevRow row={row} />)}
        </table>
    );
}

export default TopCampaignsRevTable;