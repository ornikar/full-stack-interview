import React, { Component } from 'react';
import { Table, LargeLoader } from '@ornikar/kitt';
import './App.css';

const { Row, Cell } = Table;

// kitt storybook: https://storybook-static-nxppedxrco.now.sh

const header = {
  site: 'Site',
  date: 'Date',
  time: 'Heure',
  capacity: 'Capacité',
};

export default class OrnikarTest extends Component {
  state = {
    loading: true,
  };

  handleAddressChange = async (address) => {
    console.log(address);
  };

  renderLoading = () => (
    <div className="Loader">
      <LargeLoader />
    </div>
  )

  renderTable = () => (
    <Table header={header} showHeader headerAlign="left">
      <Row>
        <Cell>
          1
        </Cell>
        <Cell>
          21/06/2018
        </Cell>
        <Cell>
          12h00
        </Cell>
        <Cell>
          150
        </Cell>
      </Row>
    </Table>
  )

  render() {
    const { loading } = this.state;

    return (
      <div className="App">
        {loading ? this.renderLoading() : this.renderTable()}
      </div>
    );
  }
}
