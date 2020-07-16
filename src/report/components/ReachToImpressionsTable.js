import React from 'react';

import ReachToImpressionsRow from './ReachToImpressionsRow';

const ReachToImpressionsTable = props => {
    return (
        <table>
            <tr>
                <th>Week</th>
                <th>No. of Campaigns</th>
                <th>Reach</th>
                <th>Impressions</th>
                <th>Reach to Impressions Rate</th>
            </tr>
            {props.ctaMetrics.map((row) => <ReachToImpressionsRow key={row.id} row={row} />)}
        </table>
    );
}

export default ReachToImpressionsTable;