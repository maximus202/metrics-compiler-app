import React from 'react';

const ClickThroughRatesRow = props => {
    return (
        <tr>
            <td>{props.row.week}</td>
            <td>{props.row.numberOfCampaigns}</td>
            <td>{props.row.reach}</td>
            <td>{props.row.clicks}</td>
            <td>{props.row.clickThroughRate}</td>
        </tr>
    );
}

export default ClickThroughRatesRow;