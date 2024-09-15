import { useState, useEffect } from "react";
import Copyright from "./Copyright";
export default function Top() {
    var [top, setTop] = useState([]);
    //Top upcoming
    useEffect(() => {
      fetch("https://api.jikan.moe/v4/top/anime", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((response) => {
          setTop(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }, []);
    return (
      <div className="Top">
        <h1>
          <i className="fa fa-child"></i> Top Rated
        </h1>
        {top == null || top == undefined || top == [] ? (
          <h2 style={{ textAlign: "center", marginTop: "100px", color: "gray" }}>
            Error Loading...
          </h2>
        ) : (
          <div className="container">
            {top.map((n) => {
              return (
                <div className="card">
                  <div className="img">
                    <img src={n.images.jpg.image_url}></img>
                    <div className="img-inner">
                      <p className="rank">{n.rank}</p>
                      <p className="type">{n.type}</p>
                      <p className="title">{n.title}</p>
                      <a className="link" href={n.url}>
                        Visit
                      </a>
                    </div>
                  </div>
                  <div className="content">
                    <p>
                      <i className="fa fa-play"></i>{" "}
                      {n.episodes == null ? 0 : n.episodes}
                    </p>
                    <p>
                      Aired from {n.aired.string}
                      {/* {n.start_date == null ? "?" : n.start_date} to{" "}
                    {n.end_date == null ? "?" : n.end_date} */}
                    </p>
                    <p>
                      <i className="fa fa-group"></i> {n.members}
                    </p>
                    <p>
                      <i className="fa fa-star"></i> {n.score}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <Copyright />
      </div>
    );
  }