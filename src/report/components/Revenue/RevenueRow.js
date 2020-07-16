import React from 'react';

const RevenueRow = props => {
    console.log(props.row)
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