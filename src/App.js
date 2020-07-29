import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import readXlsxFile from 'read-excel-file';

import Upload from './upload/pages/Upload';
import Report from './report/pages/Report';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reportName: '',
      overview: null,
      metricsReport: null,
    };
  }

  handleFileUpload(e) {
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

      const otherParams = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(metrics)
      }

      fetch('http://localhost:8000/', otherParams)
        .then(res => ((!res.ok)
          ? res.json().then((e) => Promise.reject(e))
          : console.log(res.json())))
    })
  };

  render() {
    return (
      <BrowserRouter>
        <main>
          <Switch>
            <Route path="/" exact>
              <Upload handleFileUpload={this.handleFileUpload} />
            </Route>
            <Route path="/report" exact>
              <Report />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
      </BrowserRouter>
    );
  };
}

export default App;
