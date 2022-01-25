import React, { Component } from "react";
import axios from "axios";

export default class Search extends Component {
  keywordContainer = React.createRef();
  search = (event) => {
    this.props.updateAppState({ isFirst: false, isLoading: true });
    const { value } = this.keywordContainer.current;
    axios.get(`https://api.github.com/search/users?q=${value}`).then(
      (response) => {
        this.props.updateAppState({
          users: response.data.items,
          isLoading: false,
        });
      },
      (error) => {
        this.props.updateAppState({ errorMsg: error.message });
      }
    );
  };
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            type="text"
            ref={this.keywordContainer}
            placeholder="enter the name you search"
          />
          &nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    );
  }
}
