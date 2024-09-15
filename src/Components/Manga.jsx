import { useState, useEffect } from "react";
import Copyright from "./Copyright";

export default function Manga() {
    const [manga, setManga] = useState([]);
    //Manga
    useEffect(() => {
      fetch("https://api.jikan.moe/v4/top/manga", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((response) => {
          setManga(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }, []);
    return (
      <div className="Manga">
        <h1>Popular Manga</h1>
        {manga === null || manga === undefined || manga == [] ? (
          <h2 style={{ textAlign: "center", marginTop: "100px" }}>
            Error Loading...
          </h2>
        ) : (
          manga.map((n, index) => {
            return (
              <div className="Manga-inner" key={index}>
                <div className="img">
                  <p className="title">{n.title}</p>
                  <div className="innerImg">
                    <img
                      src={
                        n.images?.jpg.image_url == null ||
                        n.images?.jpg.image_url == undefined
                          ? null
                          : n.images?.jpg.image_url
                      }
                      className="Manga-img"
                    ></img>
                  </div>
                  <p>Type : {n.type}</p>
                  <p>
                    Publishing Date :{" " + n.published?.string}
                    {/* {n.publishing_start == null || n.publishing_start == ""
                    ? "Unknown"
                    : n.publishing_start} */}
                  </p>
                  <p>Volumes : {n.volumes == null ? "Can't Find" : n.volumes}</p>
                  <p>Members : {n.members}</p>
                  <p>
                    Genres :{" "}
                    {n.genres.map((m) => {
                      return m.name + " ";
                    })}
                  </p>
                  <p>
                    Authors :{" "}
                    {n.authors.map((m) => {
                      return m.name + " ";
                    })}
                  </p>
                  <p>Scores : {n.score}</p>
                  <p>
                    Published by :{" "}
                    {n.serializations.map((m) => {
                      return m.name == null || m.name == ""
                        ? "Can't Find"
                        : m.name + " ";
                    })}
                  </p>
                </div>
                <div className="content">
                  <p>
                    <div style={{ fontSize: "30px" }}>About</div>
                    <div>
                      {n.synopsis == "" || n.synopsis == null
                        ? "No synopsis"
                        : n.synopsis}
                    </div>
                  </p>
                </div>
              </div>
            );
          })
        )}
        <Copyright />
      </div>
    );
  }