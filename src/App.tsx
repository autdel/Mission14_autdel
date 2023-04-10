// Imports needed for different pages and resources using the router-dom
import React from "react";
import "./Headshot.jpg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./pages/Movies";
import Header from "./pages/MyPodcasts";

// Image function that displays all information on the home page
function Image() {
  return (
    <div className="App">
      <h1>Welcome to the Site!</h1>
      <img src={require("./Headshot.jpg")} alt="Joel" />
      <br />
      <br />
      <p className="mx-5" style={{ fontSize: "20px" }}>
        This whole website is a fanpage for Joel Hilton! There are lots of fun
        resources here. Please navigate to the other pages to view some more
        useful information.{" "}
      </p>
    </div>
  );
}

// App function that uses a router to navigate between pages
function App() {
  // Router uses the Navbar const and different designated routes to pages in the pages folder
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Image />} />

          <Route path="/mypodcasts" element={<Header />} />

          <Route path="/movies" element={<MovieList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
