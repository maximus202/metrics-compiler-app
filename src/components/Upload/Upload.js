import React from 'react';
import readXlsxFile from 'read-excel-file';

function Upload() {
    function handleFileUpload(e) {
        e.preventDefault();

        const input = document.getElementById('input');

        readXlsxFile(input.files[0]).then((rows) => {
            const metrics = [];
           
            for (let i = 1; i < rows.length; i++) {
                metrics.push({
                    campaignDate: rows[i][0],
                    campaignName: rows[i][1],
                    audience: rows[i][2],
                    ctaType: rows[i][3],
                    reach: rows[i][4],
                    interactions: rows[i][5],
                    purchases: rows[i][6],
                    purchaseAverageAmount: rows[i][7],
                })
            };
            console.log(metrics);
        })
}

return (
    <>
        <h2>
            Upload an excel file below to generate a metrics report
                </h2>
        <form onSubmit={(e) => handleFileUpload(e)}>
            <input type="file" ID="input" accept=".xlsx, .xls, .csv" />
            <input type="submit" />
        </form>
    </>
)
}

export default Upload;