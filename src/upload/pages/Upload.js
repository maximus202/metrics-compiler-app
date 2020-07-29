import React from 'react';

import UploadBox from '../components/UploadBox/UploadBox';

const Upload = props => {
    return <UploadBox handleFileUpload={props.handleFileUpload} />;
}

export default Upload;