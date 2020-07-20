import React from 'react';

import UnsubscribesByCampaignRow from './UnsubscribesByCampaignRow';

const UnsubscribesByCampaignTable = props => {
    return (
        <table>
            <tr>
                <th>Send Date</th>
                <th>Campaign Name</th>
                <th>Reach</th>
                <th>Unsubscribes</th>
                <th>Unsubscribe Rate</th>
            </tr>
            {props.audienceMetrics.map(row => <UnsubscribesByCampaignRow row={row} />)}
        </table>

    );
}

export default UnsubscribesByCampaignTable;