import React from "react";
import Movie from "./movie";
import ColumnHeadings from "./columns-headings";

const Leaderboard = ({ movies, apiroot, updatePage, sortTableNum }) => {
  let count = 0;
  const movieList = movies.map(movie => {
    count += 1;
    return <Movie movie={movie} key={movie.imdbID} count={count} apiroot={apiroot} updatePage={updatePage} />;
  });

  return (
    <table className="table table-striped table-bordered">
      <ColumnHeadings sortTableNum={sortTableNum} />
      <tbody>{movieList}</tbody>
    </table>
  );
};

export default Leaderboard;
