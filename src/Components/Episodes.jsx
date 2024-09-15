import { useState, useEffect } from "react";
import Copyright from "./Copyright";
import { useParams } from "react-router-dom";
export default function Episodes() {
  var value = useParams();
  const [realVal, getReal] = useState("Load");
  const [realVal2, getReal2] = useState("Load");
  useEffect(() => {
    fetch("https://api.jikan.moe/v4/anime/" + value.epid, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        getReal2(response.data);
        console.log(realVal2.title);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [value]);

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/anime/" + value.epid + "/episodes", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        getReal(response.data);
        console.log(realVal);
        console.log(value);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [value]);
  return (
    <div>
      <div>
        <h3
          style={{
            marginTop: "100px",
            textAlign: "center",
          }}
        >
          {realVal2?.title_japanese} - {realVal2?.title}
        </h3>
        <h4
          style={{
            textAlign: "center",
            marginBottom: "50px",
            color: "gray",
          }}
        >
          {realVal2?.title_english}
        </h4>
      </div>
      <div className="episodes">
        {realVal === undefined || realVal === null ? (
          "NO Episodes Available"
        ) : realVal == "Load" ? (
          <h1>Loading...</h1>
        ) : (
          realVal.map((n) => {
            return (
              <div className="episodes-inner" key={n.mal_id}>
                <p className="epid">{n.mal_id}</p>
                <p>{n.title}</p>
                <p>Japanese Title: {n.title_japanese}</p>
                <p>{n.title_romanji}</p>
                <a href={n.url} className="link">
                  {n.url == null ? "No video Available" : "VIDEO URL"}
                </a>
                <p>Aired : {n.aired}</p>
                <p>
                  Filler : {n.filler === false ? "No filler" : "Yes filler"}
                </p>
                <p>Recap : {n.recap === false ? "No recap" : "Yes recap"}</p>
                <a
                  href={n.forum_url == null ? "No Rating" : n.forum_url}
                  className="link"
                >
                  Rate
                </a>
              </div>
            );
          })
        )}
        <Copyright />
      </div>
    </div>
  );
}
