import React from 'react';

import ClickThroughRatesRow from './ClickThroughRatesRow';

const ClickThroughRatesTable = props => {
    return (
        <table>
            <tr>
                <th>Week</th>
                <th>No. of Campaigns</th>
                <th>Reach</th>
                <th>Clicks</th>
                <th>Click Through Rate</th>
            </tr>
            {props.ctaMetrics.map(row => <ClickThroughRatesRow row={row} />)}
        </table>
    );
}

export default ClickThroughRatesTable;