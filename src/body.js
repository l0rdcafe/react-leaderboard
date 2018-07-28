import React from "react";
import sortBy from "lodash.sortby";
import Leaderboard from "./leaderboard";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      reverse: false,
      defaultQuery: "death",
      page: 1,
      sortKey: "Title"
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    const { apiroot } = this.props;
    const { page, defaultQuery, sortKey } = this.state;

    fetch(`${apiroot}&s=${defaultQuery}&page=${page}`, { headers: { Accept: "application/json" } })
      .then(res => res.json())
      .then(res => {
        const movies = sortBy(res.Search, sortKey);
        this.setState({ movies });
      })
      .catch(err => console.error(err));
  };
  sortTableNum = key => {
    this.setState(prevState => {
      if (prevState.sortKey === key) {
        return { reverse: true, movies: prevState.movies.reverse() };
      }
      return {
        reverse: false,
        movies: sortBy(prevState.movies, key),
        sortKey: key
      };
    });
  };
  render() {
    const { movies } = this.state;
    const { apiroot } = this.props;
    return (
      <div>
        <h3>Leaderboard</h3>
        <Leaderboard movies={movies} apiroot={apiroot} updatePage={this.getData} sortTableNum={this.sortTableNum} />
      </div>
    );
  }
}

export default Body;
