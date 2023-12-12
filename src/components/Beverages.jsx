import bev from "../../img/beverages.jpg";
import Styles from "./food.module.css";
import { Link } from "react-router-dom";

export default function Starter() {
  return (
    <>
    <div className={Styles.all}>
     <img src={bev} alt={bev} />
     <div className={Styles.one}>
         <p>Beverages</p>
         <p>5 Items</p>
     </div>
     <Link to="/beverages"><button>Show</button></Link>
    </div>
    </>
  )
}
