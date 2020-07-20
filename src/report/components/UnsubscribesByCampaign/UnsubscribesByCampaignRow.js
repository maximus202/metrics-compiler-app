import React from 'react';

const UnsubscribesByCampaignRow = props => {
    return (
        <tr>
            <td>{props.row.date}</td>
            <td>{props.row.campaignName}</td>
            <td>{props.row.reach}</td>
            <td>{props.row.unsubscribes}</td>
            <td>{props.row.unsubscribeRate}</td>
        </tr>
    );
}

export default UnsubscribesByCampaignRow;