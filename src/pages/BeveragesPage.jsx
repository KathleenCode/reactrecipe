import Back from "../components/Back";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./Pages.css";
import sob from "../../img/sobpinyoh.jpg";
import bru from "../../img/brukorang.jpg";



export default function BeveragesPage() {
  return (
    <>
    <Back />

    <div className="star">
    <Link to="yoghurt"><img src={sob} alt={sob} /><br />Click to reveal full recipe</Link>
    <Link to="orange"><img src={bru} alt={bru} /><br />Click to reveal full recipe</Link>
    </div>

    <main>
    <Outlet />
    </main>
    </>
  )
}
