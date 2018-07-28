import React from "react";

class Movie extends React.Component {
  handleClickUpdateUser = () => {
    const { apiroot, movie, updatePage } = this.props;
    fetch(`${apiroot}update/${movie.username}`)
      .then(res => res.json())
      .then(res => {
        updatePage(res);
      })
      .catch(err => console.error(err));
  };
  render() {
    const { count, movie } = this.props;
    return (
      <tr className="top10">
        <td className="idcol">{count}</td>
        <td>
          <a href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank" rel="noopener noreferrer">
            <span>{movie.Title}</span>
          </a>
        </td>
        <td className="numbercol">
          <img src={movie.Poster} className="userimg" alt="user" />
        </td>
        <td className="numbercol">{movie.Year}</td>
      </tr>
    );
  }
}

export default Movie;
