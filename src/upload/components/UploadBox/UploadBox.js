import React from 'react';
import { useHistory } from "react-router-dom";

const UploadBox = props => {
    let history = useHistory();
    return (
        <React.Fragment>
            <header>
                <h1>
                    MetricsCompiler
                </h1>
            </header>
            <h2>
                Upload an excel file below to generate a metrics report
                </h2>
            <form onSubmit={(e) => props.handleFileUpload(e, history)}>
                <label for="report-name">Report name</label>
                <input type="text" id="report-name" onChange={(e) => props.handleSetReportName(e)}/>
                <input type="file" ID="input" accept=".xlsx, .xls, .csv" />
                <input type="submit" />
            </form>
        </React.Fragment>
    )
}

export default UploadBox;