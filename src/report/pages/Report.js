import React, {Component} from 'react';

import Overview from '../components/Overview/Overview';
import ReachToImpressions from '../components/ReachToImpressions/ReachToImpressions';
import ClickThroughRates from '../components/ClickThroughRates/ClickThroughRates';
import Revenue from '../components/Revenue/Revenue';
import TopCampaignsClicks from '../components/TopCampaignsClicks/TopCampaignsClicks';
import TopCampaignsRev from '../components/TopCampaignsRev/TopCampaignsRev';
import UnsubscribesByCampaign from '../components/UnsubscribesByCampaign/UnsubscribesByCampaign';

class Report extends Component {
    /*constructor(props) {
        super(props);
        this.state = {
            reportName: 'U.S. Email Marketing - May 2020',
            overview: {
                averageEngagementLast7Days: '4.72%',
                averageEngagementOverall: '4.90%',
                averageClicksLast7Days: '2.10%',
                averageClicksOverall: '2%',
                averageUnsubscribeLast7Days: '1%',
                averageUnsubscribeOverall: '1.20%',
                revenueLast7Days: '$832,000'
            },
            reachToImpressions: [
                {
                    diamonds: [
                        {
                            informational: [
                                {
                                    week: '6/22 - 6/28',
                                    numberOfCampaigns: '7',
                                    reach: '1383844',
                                    impressions: '28444',
                                    reachToImpressionsRate: '2.06%',
                                },
                                {
                                    week: '6/29 - 7/5',
                                    numberOfCampaigns: '3',
                                    reach: '114844',
                                    impressions: '1383',
                                    reachToImpressionsRate: '1.21%',
                                },
                                {
                                    week: '7/6 - 7/12',
                                    numberOfCampaigns: '5',
                                    reach: '138344',
                                    impressions: '9844',
                                    reachToImpressionsRate: '7.12%',
                                },
                            ]
                        },
                        {
                            revenue: [
                                {
                                    week: '6/22 - 6/28',
                                    numberOfCampaigns: '7',
                                    reach: '1383844',
                                    impressions: '28444',
                                    reachToImpressionsRate: '2.06%',
                                },
                                {
                                    week: '6/29 - 7/5',
                                    numberOfCampaigns: '2',
                                    reach: '13644',
                                    impressions: '2854',
                                    reachToImpressionsRate: '20.92%',
                                },
                                {
                                    week: '7/6 - 7/12',
                                    numberOfCampaigns: '3',
                                    reach: '283344',
                                    impressions: '7363',
                                    reachToImpressionsRate: '2.60%',
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
                                    week: '6/22 - 6/28',
                                    numberOfCampaigns: '5',
                                    reach: '138444',
                                    impressions: '18444',
                                    reachToImpressionsRate: '13.32%',
                                },
                                {
                                    week: '6/29 - 7/5',
                                    numberOfCampaigns: '5',
                                    reach: '138438',
                                    impressions: '14833',
                                    reachToImpressionsRate: '10.72%',
                                },
                                {
                                    week: '7/6 - 7/12',
                                    numberOfCampaigns: '3',
                                    reach: '13133',
                                    impressions: '4424',
                                    reachToImpressionsRate: '33.69%',
                                },
                            ]
                        },
                        {
                            revenue: [
                                {
                                    week: '6/22 - 6/28',
                                    numberOfCampaigns: '2',
                                    reach: '78334',
                                    impressions: '8344',
                                    reachToImpressionsRate: '10.65%',
                                },
                                {
                                    week: '6/29 - 7/5',
                                    numberOfCampaigns: '5',
                                    reach: '138438',
                                    impressions: '16554',
                                    reachToImpressionsRate: '11.96%',
                                },
                                {
                                    week: '7/6 - 7/12',
                                    numberOfCampaigns: '4',
                                    reach: '187657',
                                    impressions: '12332',
                                    reachToImpressionsRate: '6.57%',
                                },
                            ]
                        }
                    ]
                }
            ],
            clickThroughRates: [
                {
                    diamonds: [
                        {
                            informational: [
                                {
                                    week: '6/22 - 6/28',
                                    numberOfCampaigns: '7',
                                    reach: '1383844',
                                    clicks: '1874',
                                    clickThroughRate: '0.14%',
                                },
                                {
                                    week: '6/29 - 7/5',
                                    numberOfCampaigns: '3',
                                    reach: '114844',
                                    clicks: '3745',
                                    clickThroughRate: '3.26%',
                                },
                                {
                                    week: '7/6 - 7/12',
                                    numberOfCampaigns: '5',
                                    reach: '138344',
                                    clicks: '2744',
                                    clickThroughRate: '1.98%',
                                },
                            ]
                        },
                        {
                            revenue: [
                                {
                                    week: '6/22 - 6/28',
                                    numberOfCampaigns: '7',
                                    reach: '1383844',
                                    clicks: '14251',
                                    clickThroughRate: '1.03%',
                                },
                                {
                                    week: '6/29 - 7/5',
                                    numberOfCampaigns: '2',
                                    reach: '13644',
                                    clicks: '2854',
                                    clickThroughRate: '20.92%',
                                },
                                {
                                    week: '7/6 - 7/12',
                                    numberOfCampaigns: '3',
                                    reach: '283344',
                                    clicks: '7363',
                                    clickThroughRate: '2.60%',
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
                                    week: '6/22 - 6/28',
                                    numberOfCampaigns: '5',
                                    reach: '138444',
                                    clicks: '18444',
                                    clickThroughRate: '13.32%',
                                },
                                {
                                    week: '6/29 - 7/5',
                                    numberOfCampaigns: '5',
                                    reach: '138438',
                                    clicks: '14833',
                                    clickThroughRate: '10.72%',
                                },
                                {
                                    week: '7/6 - 7/12',
                                    numberOfCampaigns: '3',
                                    reach: '13133',
                                    clicks: '4424',
                                    clickThroughRate: '33.69%',
                                },
                            ]
                        },
                        {
                            revenue: [
                                {
                                    week: '6/22 - 6/28',
                                    numberOfCampaigns: '2',
                                    reach: '78334',
                                    clicks: '8344',
                                    clickThroughRate: '10.65%',
                                },
                                {
                                    week: '6/29 - 7/5',
                                    numberOfCampaigns: '5',
                                    reach: '138438',
                                    clicks: '16554',
                                    clickThroughRate: '11.96%',
                                },
                                {
                                    week: '7/6 - 7/12',
                                    numberOfCampaigns: '4',
                                    reach: '187657',
                                    clicks: '12332',
                                    clickThroughRate: '6.57%',
                                },
                            ]
                        }
                    ]
                }
            ],
            revenue: [
                {
                    diamonds: [
                        {
                            informational: [
                                {
                                    week: '6/22 - 6/28',
                                    orders: '1733',
                                    purchaseAvg: '$120.33',
                                    revenue: '$208,531.89',
                                },
                                {
                                    week: '6/29 - 7/5',
                                    orders: '1733',
                                    purchaseAvg: '$120.33',
                                    revenue: '$208,531.89',
                                },
                                {
                                    week: '7/6 - 7/12',
                                    orders: '1733',
                                    purchaseAvg: '$120.33',
                                    revenue: '$208,531.89',
                                },
                            ]
                        },
                        {
                            revenue: [
                                {
                                    week: '6/22 - 6/28',
                                    orders: '1733',
                                    purchaseAvg: '$120.33',
                                    revenue: '$208,531.89',
                                },
                                {
                                    week: '6/29 - 7/5',
                                    orders: '1733',
                                    purchaseAvg: '$120.33',
                                    revenue: '$208,531.89',
                                },
                                {
                                    week: '7/6 - 7/12',
                                    orders: '1733',
                                    purchaseAvg: '$120.33',
                                    revenue: '$208,531.89',
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
                                    week: '6/22 - 6/28',
                                    orders: '1733',
                                    purchaseAvg: '$120.33',
                                    revenue: '$208,531.89',
                                },
                                {
                                    week: '6/29 - 7/5',
                                    orders: '1733',
                                    purchaseAvg: '$120.33',
                                    revenue: '$208,531.89',
                                },
                                {
                                    week: '7/6 - 7/12',
                                    orders: '1733',
                                    purchaseAvg: '$120.33',
                                    revenue: '$208,531.89',
                                },
                            ]
                        },
                        {
                            revenue: [
                                {
                                    week: '6/22 - 6/28',
                                    orders: '1733',
                                    purchaseAvg: '$120.33',
                                    revenue: '$208,531.89',
                                },
                                {
                                    week: '6/29 - 7/5',
                                    orders: '1733',
                                    purchaseAvg: '$120.33',
                                    revenue: '$208,531.89',
                                },
                                {
                                    week: '7/6 - 7/12',
                                    orders: '1733',
                                    purchaseAvg: '$120.33',
                                    revenue: '$208,531.89',
                                },
                            ]
                        }
                    ]
                }
            ],
            topCampaignsClicks: [
                {
                    diamonds: [
                        {
                            date: '7/16/2020',
                            campaignName: 'July PV Promo',
                            reach: '1344844',
                            clicks: '13844',
                            clickThroughRate: '1.03%',
                        },
                        {
                            date: '7/16/2020',
                            campaignName: 'July PV Promo',
                            reach: '1344844',
                            clicks: '13844',
                            clickThroughRate: '1.03%',
                        },
                        {
                            date: '7/16/2020',
                            campaignName: 'July PV Promo',
                            reach: '1344844',
                            clicks: '13844',
                            clickThroughRate: '1.03%',
                        },
                    ],
                },
                {
                    usnfr: [
                        {
                            date: '7/16/2020',
                            campaignName: 'July PV Promo',
                            reach: '1344844',
                            clicks: '13844',
                            clickThroughRate: '1.03%',
                        },
                        {
                            date: '7/16/2020',
                            campaignName: 'July PV Promo',
                            reach: '1344844',
                            clicks: '13844',
                            clickThroughRate: '1.03%',
                        },
                        {
                            date: '7/16/2020',
                            campaignName: 'July PV Promo',
                            reach: '1344844',
                            clicks: '13844',
                            clickThroughRate: '1.03%',
                        },
                    ],
                },
            ],
            topCampaignsRev: [
                {
                    diamonds: [
                        {
                            date: '7/16/2020',
                            campaignName: 'July PV Promo',
                            reach: '1344844',
                            clicks: '13844',
                            orders: '748',
                            purchaseAvg: '$120.33',
                            revenue: '$90,006.84',
                        },
                        {
                            date: '7/16/2020',
                            campaignName: 'July PV Promo',
                            reach: '1344844',
                            clicks: '13844',
                            orders: '748',
                            purchaseAvg: '$120.33',
                            revenue: '$90,006.84',
                        },
                        {
                            date: '7/16/2020',
                            campaignName: 'July PV Promo',
                            reach: '1344844',
                            clicks: '13844',
                            orders: '748',
                            purchaseAvg: '$120.33',
                            revenue: '$90,006.84',
                        },
                    ],
                },
                {
                    usnfr: [
                        {
                            date: '7/16/2020',
                            campaignName: 'July PV Promo',
                            reach: '1344844',
                            clicks: '13844',
                            orders: '748',
                            purchaseAvg: '$120.33',
                            revenue: '$90,006.84',
                        },
                        {
                            date: '7/16/2020',
                            campaignName: 'July PV Promo',
                            reach: '1344844',
                            clicks: '13844',
                            orders: '748',
                            purchaseAvg: '$120.33',
                            revenue: '$90,006.84',
                        },
                        {
                            date: '7/16/2020',
                            campaignName: 'July PV Promo',
                            reach: '1344844',
                            clicks: '13844',
                            orders: '748',
                            purchaseAvg: '$120.33',
                            revenue: '$90,006.84',
                        },
                    ],
                },
            ],
            unsubscribesByCampaign: [
                {
                    diamonds: [
                        {
                            date: '7/16/2020',
                            campaignName: 'July PV Promo',
                            reach: '148444',
                            unsubscribes: '42344',
                            unsubscribeRate: '28%',
                        },
                        {
                            date: '7/16/2020',
                            campaignName: 'July PV Promo',
                            reach: '148444',
                            unsubscribes: '42344',
                            unsubscribeRate: '28%',
                        },
                        {
                            date: '7/16/2020',
                            campaignName: 'July PV Promo',
                            reach: '148444',
                            unsubscribes: '42344',
                            unsubscribeRate: '28%',
                        },
                    ],
                },
                {
                    usnfr: [
                        {
                            date: '7/16/2020',
                            campaignName: 'July PV Promo',
                            reach: '148444',
                            unsubscribes: '42344',
                            unsubscribeRate: '28%',
                        },
                        {
                            date: '7/16/2020',
                            campaignName: 'July PV Promo',
                            reach: '148444',
                            unsubscribes: '42344',
                            unsubscribeRate: '28%',
                        },
                        {
                            date: '7/16/2020',
                            campaignName: 'July PV Promo',
                            reach: '148444',
                            unsubscribes: '42344',
                            unsubscribeRate: '28%',
                        },
                    ],
                },
            ],
        };
    }*/

    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                <header>
                    <h1>
                        Metrics Report: {this.state.reportName}
                    </h1>
                </header>
                <section>
                    <Overview metrics={this.state.overview} />
                    <ReachToImpressions metrics={this.state.reachToImpressions} />
                    <ClickThroughRates metrics={this.state.clickThroughRates} />
                    <Revenue metrics={this.state.revenue} />
                    <TopCampaignsClicks metrics={this.state.topCampaignsClicks} />
                    <TopCampaignsRev metrics={this.state.topCampaignsRev} />
                    <UnsubscribesByCampaign metrics={this.state.unsubscribesByCampaign} />
                </section>
            </React.Fragment>
        );
    };
}

export default Report;