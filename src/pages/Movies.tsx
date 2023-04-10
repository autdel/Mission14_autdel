import data from "../MovieData.json";
import { Movie } from "../types/movie";
import React, { useEffect, useState } from "react";

// Movie list that displays all movies from MovieData.json
function MovieList() {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  // Use Effect method do only get information from the API when things change
  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch("https://localhost:4000/movie");
      const temp = await rsp.json();
      setMovieData(temp);
    };
    fetchMovie();
  }, []);

  return (
    <>
      <div className="App" style={{ marginTop: "10px" }}>
        <h3>Joel Hilton's Movie Collection</h3>
      </div>
      <br />
      <div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Lent To</th>
              <th>Edited</th>
            </tr>
          </thead>
          {/* uses movie information from the API for table data */}
          <tbody>
            {movieData.map((m) => (
              <tr>
                <td>{m.title}</td>
                <td>{m.year}</td>
                <td>{m.director}</td>
                <td>{m.rating}</td>
                <td>{m.category}</td>
                <td>{m.lentTo}</td>
                <td>{m.edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList;
