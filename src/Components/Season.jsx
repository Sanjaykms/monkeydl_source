import { useState, useEffect } from "react";
import Copyright from "./Copyright";
import { Link } from "react-router-dom";
export default function Season() {
  const [season, setSeason] = useState([]);
  var [getVal2, setget2] = useState(2018);
  var [value2, setvalS] = useState(season);
  const seasonYear = getVal2 === "" || getVal2 === null ? 2018 : getVal2;
  console.log(value2);

  //Season
  useEffect(() => {
    fetch("https://api.jikan.moe/v4/seasons/2018/winter", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        setSeason(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/seasons/${seasonYear}/winter`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        setvalS(response.data);
        console.log(getVal2);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [getVal2]);

  const yearseas = [
    1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001,
    2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013,
    2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
  ];
  return (
    <div className="Season">
      <h1>
        <span>Season's Popular</span>
        <select
          id="seasonval"
          onChange={(e) => {
            setget2(e.target.value);
          }}
        >
          {yearseas.map((hu) => (
            <option>{hu}</option>
          ))}
        </select>
      </h1>
      {value2 == null || value2 == undefined ? (
        <h2 style={{ textAlign: "center", marginTop: "100px" }}>
          Error Loading...
        </h2>
      ) : (
        value2.map((n) => {
          return (
            <div className="Season-inner" key={n.mal_id}>
              <div className="img">
                <p className="title">{n.title}</p>

                <div className="innerImg">
                  <Link to={`/monkeydl/epi/${n.mal_id}`}>
                    <img
                      className="Season-img"
                      src={n.images.jpg.image_url}
                      id={n.mal_id}
                      title="Click to see episodes."
                    ></img>
                  </Link>
                </div>
                <p>English Title : {n.title_english}</p>
                <p>Rank : {n.rank}</p>
                <p>Type : {n.type}</p>
                <p>Airing : {n.aired.string}</p>
                <p>Episodes : {n.episodes}</p>
                <p>Members : {n.members}</p>
                <p>
                  Genres :{" "}
                  {n.genres.map((m) => {
                    return m.name + " ";
                  })}
                </p>
                <p>Source : {n.source}</p>
                <p>
                  Producers :{" "}
                  {n.producers.map((m) => {
                    return m.name + ", ";
                  })}
                </p>
                <p>Scores : {n.score}</p>
                <p>
                  Studios :{" "}
                  {n.studios.map((m) => {
                    return m.name + ", ";
                  })}
                </p>

                <a href={n.url} className="link">
                  Visit
                </a>
              </div>
              <div className="content">
                <div style={{ fontSize: "30px" }}>About</div>
                <p>{n.synopsis}</p>
              </div>
            </div>
          );
        })
      )}
      <Copyright />
    </div>
  );
}
