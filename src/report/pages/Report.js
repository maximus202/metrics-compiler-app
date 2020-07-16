import React from 'react';

import ReachToImpressions from '../components/ReachToImpressions';

const Report = props => {
    const METRICS = {
        reachToImpressions: [
            {
                diamonds: [
                    {
                        informational: [
                            {
                                id: 1,
                                week: '6/22 - 6/28',
                                numberOfCampaigns: '7',
                                reach: '1383844',
                                impressions: '28444',
                                reachToImpressionsRate: '2.06%',
                                audience: 'diamonds',
                                cta: 'informational',
                            },
                            {
                                id: 2,
                                week: '6/29 - 7/5',
                                numberOfCampaigns: '3',
                                reach: '114844',
                                impressions: '1383',
                                reachToImpressionsRate: '1.21%',
                                audience: 'diamonds',
                                cta: 'informational',
                            },
                            {
                                id: 3,
                                week: '7/6 - 7/12',
                                numberOfCampaigns: '5',
                                reach: '138344',
                                impressions: '9844',
                                reachToImpressionsRate: '7.12%',
                                audience: 'diamonds',
                                cta: 'informational',
                            },
                        ]
                    },
                    {
                        revenue: [
                            {
                                id: 4,
                                week: '6/22 - 6/28',
                                numberOfCampaigns: '7',
                                reach: '1383844',
                                impressions: '28444',
                                reachToImpressionsRate: '2.06%',
                                audience: 'diamonds',
                                cta: 'revenue',
                            },
                            {
                                id: 5,
                                week: '6/29 - 7/5',
                                numberOfCampaigns: '2',
                                reach: '13644',
                                impressions: '2854',
                                reachToImpressionsRate: '20.92%',
                                audience: 'diamonds',
                                cta: 'revenue',
                            },
                            {
                                id: 6,
                                week: '7/6 - 7/12',
                                numberOfCampaigns: '3',
                                reach: '283344',
                                impressions: '7363',
                                reachToImpressionsRate: '2.60%',
                                audience: 'diamonds',
                                cta: 'revenue',
                            },
                        ]
                    }
                ]
            },
            {
                usnfr: [
                    {
                        informational: [
                            {
                                id: 7,
                                week: '6/22 - 6/28',
                                numberOfCampaigns: '5',
                                reach: '138444',
                                impressions: '18444',
                                reachToImpressionsRate: '13.32%',
                                audience: 'usnfr',
                                cta: 'informational',
                            },
                            {
                                id: 8,
                                week: '6/29 - 7/5',
                                numberOfCampaigns: '5',
                                reach: '138438',
                                impressions: '14833',
                                reachToImpressionsRate: '10.72%',
                                audience: 'usnfr',
                                cta: 'informational',
                            },
                            {
                                id: 9,
                                week: '7/6 - 7/12',
                                numberOfCampaigns: '3',
                                reach: '13133',
                                impressions: '4424',
                                reachToImpressionsRate: '33.69%',
                                audience: 'usnfr',
                                cta: 'informational',
                            },
                        ]
                    },
                    {
                        revenue: [
                            {
                                id: 10,
                                week: '6/22 - 6/28',
                                numberOfCampaigns: '2',
                                reach: '78334',
                                impressions: '8344',
                                reachToImpressionsRate: '10.65%',
                                audience: 'usnfr',
                                cta: 'revenue',
                            },
                            {
                                id: 11,
                                week: '6/29 - 7/5',
                                numberOfCampaigns: '5',
                                reach: '138438',
                                impressions: '16554',
                                reachToImpressionsRate: '11.96%',
                                audience: 'usnfr',
                                cta: 'revenue',
                            },
                            {
                                id: 12,
                                week: '7/6 - 7/12',
                                numberOfCampaigns: '4',
                                reach: '187657',
                                impressions: '12332',
                                reachToImpressionsRate: '6.57%',
                                audience: 'usnfr',
                                cta: 'revenue',
                            },
                        ]
                    }
                ]
            }
        ]
    };

    return (
        <React.Fragment>
            <h2>
                Metrics Report
            </h2>
            <section>
                <ReachToImpressions metrics={METRICS.reachToImpressions} />
            </section>
        </React.Fragment>
    );
}

export default Report;