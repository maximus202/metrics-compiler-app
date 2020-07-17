import React from 'react';

const TopCampaignsClicksRow = props => {
    console.log(props.row)
    return (
        <tr>
            <td>{props.row.date}</td>
            <td>{props.row.campaignName}</td>
            <td>{props.row.reach}</td>
            <td>{props.row.clicks}</td>
            <td>{props.row.clickThroughRate}</td>
        </tr>
    )
}

export default TopCampaignsClicksRow;