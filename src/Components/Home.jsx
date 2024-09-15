import frontimg from "../Images/WELCOME1.jpg";
import ATTACK from "../Images/ATTACK.jpg";
import BLACK from "../Images/BLACK.jpg";
import BLEACH from "../Images/BLEACH.jpg";
import BORUTO from "../Images/BORUTO.png";
import DEATH from "../Images/DEATH.jpg";
import DEMON from "../Images/DEMON.jpg";
import DOCTOR from "../Images/DOCTOR.jpg";
import DRAGON from "../Images/DRAGON.jpg";
import FAIRY from "../Images/FAIRY.jpg";
import FULLMETAL from "../Images/FULLMETAL.png";
import GHOUL from "../Images/GHOUL.jpg";
import HUNTER from "../Images/HUNTER.jpg";
import KAISEN from "../Images/KAISEN.jpg";
import LUFFY from "../Images/LUFFY.png";
import MYHERO from "../Images/MYHERO.jpg";
import NARUTO from "../Images/NARUTO.png";
import SEVEN from "../Images/SEVEN.jpg";
import NONO from "../Images/NONO.jpg";
import SWORD from "../Images/SWORD.jpg";
import PARADE from "../Images/PARADE.jpg";
import HAIKYUU from "../Images/HAIKYUU.jpg";
import CODE from "../Images/CODE.jpg";
import CLASS from "../Images/CLASS.jpg";
import CHAR from "../Images/CHAR.jpg";

import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="home">
      <img src={frontimg} className="home-image"></img>
      <div className="row">
        <div className="column">
          <Link to="/monkeydl/epi/16498">
            <img id="16498" src={ATTACK}></img>
          </Link>
          <Link to="/monkeydl/epi/34572">
            <img id="34572" src={BLACK}></img>
          </Link>
          <Link to="/monkeydl/epi/269">
            <img id="269" src={BLEACH}></img>
          </Link>
          <Link to="/monkeydl/epi/34566">
            <img id="34566" src={BORUTO}></img>
          </Link>
          <Link to="/monkeydl/epi/1535">
            <img id="1535" src={DEATH}></img>
          </Link>
          <Link to="/monkeydl/epi/38000">
            <img id="38000" src={DEMON}></img>
          </Link>
        </div>
        <div className="column">
          <Link to="/monkeydl/epi/38691">
            <img id="103897" src={DOCTOR}></img>
          </Link>
          <Link to="/monkeydl/epi/223">
            <img id="223" src={DRAGON}></img>
          </Link>
          <Link to="/monkeydl/epi/6702">
            <img id="6702" src={FAIRY}></img>
          </Link>
          <Link to="/monkeydl/epi/5114">
            <img id="5114" src={FULLMETAL}></img>
          </Link>
          <Link to="/monkeydl/epi/22319">
            <img id="22319" src={GHOUL}></img>
          </Link>
          <Link to="/monkeydl/epi/11061">
            <img id="11061" src={HUNTER}></img>
          </Link>
        </div>
        <div className="column">
          <Link to="/monkeydl/epi/21">
            <img id="21" src={LUFFY}></img>
          </Link>
          <Link to="/monkeydl/epi/31964">
            <img id="31964" src={MYHERO}></img>
          </Link>
          <Link to="/monkeydl/epi/20">
            <img id="20" src={NARUTO}></img>
          </Link>
          <Link to="/monkeydl/epi/19815">
            <img id="19815" src={NONO}></img>
          </Link>
          <Link to="/monkeydl/epi/23755">
            <img id="23755" src={SEVEN}></img>
          </Link>
          <Link to="/monkeydl/epi/40748">
            <img id="40748" src={KAISEN}></img>
          </Link>
        </div>
        <div className="column">
          <Link to="/monkeydl/epi/11757">
            <img id="11757" src={SWORD}></img>
          </Link>
          <Link to="/monkeydl/epi/28223">
            <img id="28223" src={PARADE}></img>
          </Link>
          <Link to="/monkeydl/epi/28999">
            <img id="28999" src={CHAR}></img>
          </Link>
          <Link to="/monkeydl/epi/1575">
            <img id="1575" src={CODE}></img>
          </Link>
          <Link to="/monkeydl/epi/20583">
            <img id="20583" src={HAIKYUU}></img>
          </Link>
          <Link to="/monkeydl/epi/24833">
            <img id="24833" src={CLASS}></img>
          </Link>
        </div>
      </div>
      <div
        style={{
          background: "rgb(108,108,108)",
          background:
            "linear-gradient(0deg, rgba(108,108,108,1) 0%, rgba(0,0,0,1) 90%)",
          textAlign: "center",
          padding: "5%",
        }}
      >
        <p class="cp-text">
          © Copyright {new Date().getFullYear()}
          <br></br>Sanjay K<br></br>All rights reserved.
        </p>
      </div>
    </div>
  );
}
