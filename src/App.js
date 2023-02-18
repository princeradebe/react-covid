import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch('https://disease.sh/v3/covid-19/countries/')
      .then(response => response.json())
      .then(data => this.setState({ data: data }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { data, searchField } = this.state;
    const filteredCountries = data.filter(country =>
      country.country.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1> React Covid </h1>
        <SearchBox placeholder='search country' handleChange={this.handleChange} />
        <CardList countries={filteredCountries} />
      </div>
    );
  }
}

export default App;
