import React from 'react';

import UploadBox from '../components/UploadBox/UploadBox';

const Upload = props => {
    return <UploadBox
        history={props.history}
        handleFileUpload={props.handleFileUpload}
        handleSetReportName={props.handleSetReportName}
    />;
}

export default Upload;