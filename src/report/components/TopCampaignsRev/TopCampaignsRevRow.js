import React from 'react';

const TopCampaignsRevRow = props => {
    return (
        <tr>
            <td>{props.row.date}</td>
            <td>{props.row.campaignName}</td>
            <td>{props.row.reach}</td>
            <td>{props.row.clicks}</td>
            <td>{props.row.orders}</td>
            <td>{props.row.purchaseAvg}</td>
            <td>{props.row.revenue}</td>
        </tr>
    );
}

export default TopCampaignsRevRow;