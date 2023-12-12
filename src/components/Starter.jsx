import starter from "../../img/starter.jpg";
import Styles from "./food.module.css";
import { Link } from "react-router-dom";


export default function Starter() {
  return (
    <>
    <div className={Styles.all}>
     <img src={starter} alt={starter} />
     <div className={Styles.one}>
         <p>Starter</p>
         <p>3 Items</p>
     </div>
     <Link to="/starter" ><button>Show</button></Link>
    </div>
    </>
  )
}
