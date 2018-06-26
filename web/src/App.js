import React, { Component } from 'react';
import { InputAutocomplete } from '@ornikar/kitt';
import { Paragraph } from '@ornikar/kitt/typography';
import './App.css';

// kitt storybook: https://storybook-static-nxppedxrco.now.sh

export default class OrnikarTest extends Component {
  state = {
    searchValue: null,
    results: [],
  };

  handleInputValueChange = async (newValue) => {
    this.setState({ searchValue: newValue });
    const results = await fetch('http://localhost:3000/').then(response => response.json());
    this.setState({ results });
  };

  render() {
    const { searchValue, results } = this.state;

    return (
      <div className="App">
        <InputAutocomplete
          value={searchValue}
          onInputValueChange={this.handleInputValueChange}
          itemToString={item => item && item.name}
        >
          {results.map(item => (
            <InputAutocomplete.Item key={item.id} item={item}>
              <Paragraph>
                {item.name}
              </Paragraph>
            </InputAutocomplete.Item>
          ))}
        </InputAutocomplete>
      </div>
    );
  }
}
