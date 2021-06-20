import React from 'react';
//by convention we put imports for third party packages above files we created ourself
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmit(term) {
    axios
      .get('https://api.unsplash.com/search/photos', {
        params: { query: term },
        headers: {
          Authorization:
            'Client-ID iUY96ywyCtPUtVg649JITZ2mJj7Yyc9fmpSX3STcq_A',
        },
        // .then chains a callback function to the get request via a promise
      })
      .then((response) => {
        console.log(response.data.results);
      });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}
export default App;
