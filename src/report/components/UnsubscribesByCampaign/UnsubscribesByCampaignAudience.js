import React from 'react';
import UnsubscribesByCampaignTable from './UnsubscribesByCampaignTable';

const UnsubscribesByCampaignAudience = props => {
    let audienceName = '';
    let audienceMetrics = null;

    for (let [key, value] of Object.entries(props.audience)) {
        audienceName = key;
        audienceMetrics = value;
    }

    return (
        <React.Fragment>
            <h4>{audienceName.toUpperCase()}</h4>
            <UnsubscribesByCampaignTable audienceMetrics={audienceMetrics} />
        </React.Fragment>
    );
}

export default UnsubscribesByCampaignAudience;