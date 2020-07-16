import React from 'react';

import RevenueRow from './RevenueRow';

const RevenueTable = props => {
    return (
        <table>
            <tr>
                <th>Week</th>
                <th>Orders</th>
                <th>Purchase Average</th>
                <th>Revenue Generated</th>
            </tr>
            {props.metrics.map(row => <RevenueRow row={row} />)}
        </table>
    )
}

export default RevenueTable;