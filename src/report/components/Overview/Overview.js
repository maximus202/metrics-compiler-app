import React from 'react';

const Overview = props => {
    return (
        <React.Fragment>
            <h2>General Overview (last 7 days)</h2>
            <ul>
                <li>{props.metrics.averageEngagementLast7Days} ({props.metrics.averageEngagementOverall} overall) average engagement (reach to impressions).</li>
                <li>{props.metrics.averageClicksLast7Days} ({props.metrics.averageClicksOverall} overall) average click through rate (reach to clicks).</li>
                <li>{props.metrics.averageUnsubscribeLast7Days} ({props.metrics.averageUnsubscribeOverall} overall) average unsubscribe rate.</li>
                <li>{props.metrics.revenueLast7Days} generated in revenue.</li>
            </ul>
        </React.Fragment>
    )
}

export default Overview;