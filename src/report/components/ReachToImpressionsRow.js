import React from 'react';

const ReachToImpressionsRow = props => { 
    return (
        <tr>
            <td>{props.row.week}</td>
            <td>{props.row.numberOfCampaigns}</td>
            <td>{props.row.reach}</td>
            <td>{props.row.impressions}</td>
            <td>{props.row.reachToImpressionsRate}</td>
        </tr>
    );
};

export default ReachToImpressionsRow;