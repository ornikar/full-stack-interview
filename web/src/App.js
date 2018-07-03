import React, { Component } from 'react';
import { Table, LargeLoader } from '@ornikar/kitt';
import './App.css';
import axios from 'axios';
import format from 'date-fns/format';
import addDays from 'date-fns/add_days';
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
    sessions: [],
    date: new Date(),
    latitude: null,
    longitude: null,
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { longitude, latitude } = coords;
      this.setState({
        latitude,
        longitude,
      });
      this.fetchSessions(this.state.date);
    });
  }

  fetchSessions = async date => {
    const { longitude, latitude } = this.state;
    this.setState({
      loading: true,
    });
    const response = await axios.get(
      `http://localhost:8080/api/sessions?day=${date}&latitude=${latitude}&longitude=${longitude}&perimeter=10`,
    );
    this.setState({
      sessions: response.data,
      date,
      loading: false,
    });
  };

  handleClick = () => {
    this.fetchSessions(addDays(this.state.date, 1));
  };

  renderLoading = () => (
    <div className="Loader">
      <LargeLoader />
    </div>
  );

  renderTable = () => (
    <React.Fragment>
      <button onClick={this.handleClick}>next day</button>
      <Table header={header} showHeader headerAlign="left">
        {this.state.sessions.map(session => (
          <Row key={session.id}>
            <Cell>{session.placeId}</Cell>
            <Cell>{format(new Date(session.startAt), 'YYYY/MM/DD')}</Cell>
            <Cell>{format(new Date(session.startAt), 'HH:mm')}</Cell>
            <Cell>{session.remainingCapacity}</Cell>
          </Row>
        ))}
      </Table>
    </React.Fragment>
  );

  render() {
    const { loading } = this.state;
    return (
      <div className="App">
        {loading ? this.renderLoading() : this.renderTable()}
      </div>
    );
  }
}
