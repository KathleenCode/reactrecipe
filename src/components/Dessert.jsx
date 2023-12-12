import dess from "../../img/dessert.jpg";
import Styles from "./food.module.css";
import { Link } from "react-router-dom";

export default function Starter() {
  return (
    <>
    <div className={Styles.all}>
     <img src={dess} alt={dess} />
     <div className={Styles.one}>
         <p>Dessert</p>
         <p>Single item</p>
     </div>
     <Link to="/dessert"><button>Show</button></Link>
    </div>
    </>
  )
}
