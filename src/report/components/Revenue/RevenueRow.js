import React from 'react';

const RevenueRow = props => {
    return (
        <tr>
            <td>{props.row.week}</td>
            <td>{props.row.orders}</td>
            <td>{props.row.purchaseAvg}</td>
            <td>{props.row.revenue}</td>
        </tr>
    );
}

export default RevenueRow;