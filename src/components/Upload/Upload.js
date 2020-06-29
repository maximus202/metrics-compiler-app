import React, { Component } from 'react';

class Upload extends Component {
    render() {
        return (
            <>
                <h2>
                    Upload an excel file below to generate a metrics report
                </h2>
                <form>
                    <input type="file" ID="fileSelect" accept=".xlsx, .xls, .csv"/>
                    <input type="submit" />
                </form>
            </>
        )
    }
}

export default Upload;