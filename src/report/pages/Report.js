import React from 'react';

const Report = props => {
    const METRICS = {
        reachToImpressions: {
            diamonds: {
                informational: [
                    {
                        week: '6/22 - 6/28',
                        numberOfCampaigns: '7',
                        reach: '1383844',
                        impressions: '28444',
                        reachToImpressionsRate: '2.06%'
                    },
                    {
                        week: '6/29 - 7/5',
                        numberOfCampaigns: '3',
                        reach: '114844',
                        impressions: '1383',
                        reachToImpressionsRate: '1.21%'
                    },
                    {
                        week: '7/6 - 7/12',
                        numberOfCampaigns: '5',
                        reach: '138344',
                        impressions: '9844',
                        reachToImpressionsRate: '7.12%'
                    },
                ],
                revenue: [
                    {
                        week: '6/22 - 6/28',
                        numberOfCampaigns: '7',
                        reach: '1383844',
                        impressions: '28444',
                        reachToImpressionsRate: '2.06%'
                    },
                    {
                        week: '6/29 - 7/5',
                        numberOfCampaigns: '2',
                        reach: '13644',
                        impressions: '2854',
                        reachToImpressionsRate: '20.92%'
                    },
                    {
                        week: '7/6 - 7/12',
                        numberOfCampaigns: '3',
                        reach: '283344',
                        impressions: '7363',
                        reachToImpressionsRate: '2.60%'
                    },
                ]
            },
            usnfr: {
                informational: [
                    {
                        week: '6/22 - 6/28',
                        numberOfCampaigns: '5',
                        reach: '138444',
                        impressions: '18444',
                        reachToImpressionsRate: '13.32%'
                    },
                    {
                        week: '6/29 - 7/5',
                        numberOfCampaigns: '5',
                        reach: '138438',
                        impressions: '14833',
                        reachToImpressionsRate: '10.72%'
                    },
                    {
                        week: '7/6 - 7/12',
                        numberOfCampaigns: '3',
                        reach: '13133',
                        impressions: '4424',
                        reachToImpressionsRate: '33.69%'
                    },
                ],
                revenue: [
                    {
                        week: '6/22 - 6/28',
                        numberOfCampaigns: '2',
                        reach: '78334',
                        impressions: '8344',
                        reachToImpressionsRate: '10.65%'
                    },
                    {
                        week: '6/29 - 7/5',
                        numberOfCampaigns: '5',
                        reach: '138438',
                        impressions: '16554',
                        reachToImpressionsRate: '11.96%'
                    },
                    {
                        week: '7/6 - 7/12',
                        numberOfCampaigns: '4',
                        reach: '187657',
                        impressions: '12332',
                        reachToImpressionsRate: '6.57%'
                    },
                ]
            }
        }
    };

    return (
        <>
            <h2>
                Metrics Report
            </h2>
            <section>
                <h3>
                    Reach to Impressions
                </h3>
                <section>
                    <h4>Diamonds</h4>
                    <section>
                        <h5>Informational</h5>
                        <table>
                            <tr>
                                <th>Week</th>
                                <th>No. of Campaigns</th>
                                <th>Reach</th>
                                <th>Impressions</th>
                                <th>Reach to Impressions Rate</th>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                    </section>
                    <section>
                        <h5>Revenue</h5>
                        <table>
                            <tr>
                                <th>Week</th>
                                <th>No. of Campaigns</th>
                                <th>Reach</th>
                                <th>Impressions</th>
                                <th>Reach to Impressions Rate</th>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                    </section>
                </section>
                <section>
                    <h4>US/NFR</h4>
                    <section>
                        <h5>Informational</h5>
                        <table>
                            <tr>
                                <th>Week</th>
                                <th>No. of Campaigns</th>
                                <th>Reach</th>
                                <th>Impressions</th>
                                <th>Reach to Impressions Rate</th>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                    </section>
                    <section>
                        <h5>Revenue</h5>
                        <table>
                            <tr>
                                <th>Week</th>
                                <th>No. of Campaigns</th>
                                <th>Reach</th>
                                <th>Impressions</th>
                                <th>Reach to Impressions Rate</th>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                    </section>
                </section>
            </section>
        </>
    );
}

export default Report;