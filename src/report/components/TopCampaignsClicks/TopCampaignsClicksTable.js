import React from 'react';

import TopCampaignsClicksRow from './TopCampaignsClicksRow';

const TopCampaignsClicksTable = props => {
    return (
        <table>
            <tr>
                <th>Send Date</th>
                <th>Campaign Name</th>
                <th>Reach</th>
                <th>Clicks</th>
                <th>Click Through Rate</th>
            </tr>
            {props.audienceMetrics.map(row => <TopCampaignsClicksRow row={row} />)}
        </table>
    )
}

export default TopCampaignsClicksTable;