import "./App.css";
import { useState, useEffect } from "react";
import logo1 from "./Images/LOGO.png";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Top from "./Components/Top.jsx";
import Manga from "./Components/Manga.jsx";
import Season from "./Components/Season.jsx";
import Episodes from "./Components/Episodes.jsx";
function App() {
  const [val, setVal] = useState("");
  const [rest, setRest] = useState([]);

  //Search
  useEffect(() => {
    fetch("https://api.jikan.moe/v4/anime?q=" + val, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        setRest(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
    console.log(val);
    Searchres();
  }, [val]);

  const Searchres = () => {
    return (
      <div className="search-results">
        {rest === undefined
          ? ""
          : rest.map((n) => {
              return (
                <Link to={`/monkeydl/epi/${n.mal_id}`}>
                  <p
                    className="result"
                    id={n.mal_id}
                    onClick={() => setVal("")}
                  >
                    {n.title}
                  </p>
                </Link>
              );
            })}
      </div>
    );
  };
  return (
    <Router>
      <div className="App">
        <div className="navb">
          <div className="navb-inner">
            <Link to="/">
              <img src={logo1} alt="logo" title="Home"></img>
            </Link>
            <h1>Monkey D L</h1>
            <div className="menu">
              <p className="bar">≡</p>
              <input type="checkbox" className="menu-check"></input>
              <div className="manga-outer" id="manga-outer1">
                <p className="manga">
                  <Link to="/monkeydl/top">Top Rated</Link>
                </p>
                <p className="manga">
                  <Link to="/monkeydl/manga">Manga</Link>
                </p>
                <p className="manga">
                  <Link to="/monkeydl/season">Season</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="search">
            <input
              type="search"
              placeholder="Search anime"
              onChange={(e) => setVal(e.target.value)}
              title="Search"
            ></input>
            {val == null || val == undefined || val == "" ? null : Searchres()}
          </div>
        </div>
        <div className="main-area">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/monkeydl/top" element={<Top />}></Route>
            <Route path="/monkeydl/manga" element={<Manga />}></Route>
            <Route path="/monkeydl/season" element={<Season />}></Route>
            <Route path="/monkeydl/epi/:epid" element={<Episodes />}></Route>
            <Route
              path="*"
              element={
                <div className="not-found-container">
                  <p>Not Found</p>
                  <p>Please enter a valid URL</p>
                </div>
              }
            ></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
