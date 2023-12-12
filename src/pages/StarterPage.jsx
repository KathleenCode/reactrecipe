import Back from "../components/Back";
import { Link } from "react-router-dom";
import fruit from "../../img/fruitsalad.jpg";
import veg from "../../img/vegsalad.jpg";
import soup from "../../img/soup.jpg";
import "./Pages.css";
import { Outlet } from "react-router-dom";


export default function StarterPage() {
  return (
    <>
    <Back />
    
    <div className="star">
    <Link to="fruit"><img src={fruit} alt={fruit} /><br />Click to reveal full recipe</Link>
    <Link to="vegetable"><img src={veg} alt={veg} /><br />Click to reveal full recipe</Link>
    <Link to="soup"><img src={soup} alt={soup} /><br />Click to reveal full recipe</Link>
    </div>

    <main>
      <Outlet />
    </main>
    </>
  )
}
