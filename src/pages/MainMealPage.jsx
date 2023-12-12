import Back from "../components/Back";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./Pages.css";
import amp from "../../img/ampesi.jpg";
import fufu from "../../img/fufu.jpg";
import banku from "../../img/banku.jpg";
import jollof from "../../img/jollof.jpg";
import friedrice from "../../img/friedrice.jpg";



export default function MainMealPage() {
  return (
    <>
     <Back />

    <div className="star main">
    <Link to="amp"><img src={amp} alt={amp} /><br />Click to reveal full recipe</Link>
    <Link to="fufu"><img src={fufu} alt={fufu} /><br />Click to reveal full recipe</Link>
    <Link to="banku"><img src={banku} alt={banku} /><br />Click to reveal full recipe</Link>
    <Link to="jollof"><img src={jollof} alt={jollof} /><br />Click to reveal full recipe</Link>
    <Link to="friedrice"><img src={friedrice} alt={friedrice} /><br />Click to reveal full recipe</Link>
    </div>

    <main>
    <Outlet />
    </main>
    </>
  )
}
