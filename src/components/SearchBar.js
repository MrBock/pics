import React from 'react';

class SearchBar extends React.Component {
  //it's community convention to name event handlers this way: "on" + {name of the element} + {event we're watching for}
  state = { term: '' };

  /* onInputChange(e) {
    this.setState({ term: e.target.value });
  }
  */

  // using arrow functions for declaring the method on the SearchBar component binds "this" to the parenting scope;
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            {/* 
            parenthesis are omitted for onChange; 
            otherwise the method would be invoked on every render; 
            were passing a reference to the function so it just evokes onChange;
            alternative short hand method: directly passing an arrow function in the braces -> onChange={(event) => console.log(event.target.value)};
            "event" might be further abbreviated to "e";

            by assigning this.state.term to the value of the input field we're able to control its value via the state;
            every time this.onInputChange is evoked, the component rerenders and sets value to the value the input field already had;
            this way we're keeping the value on a short leash, essentially blocking it from taking other values than the one controlled via the state object;
            this allows us to control the rendered input value as well (e.g. we could enforce uppercase values);
            */}
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
