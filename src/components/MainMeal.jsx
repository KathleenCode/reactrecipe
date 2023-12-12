import meal from "../../img/main meal.jpg";
import Styles from "./food.module.css";
import { Link } from "react-router-dom";


export default function Starter() {
  return (
    <>
    <div className={Styles.all}>
     <img src={meal} alt={meal} />
     <div className={Styles.one}>
         <p>Main Meal</p>
         <p>5 Items</p>
     </div>
     <Link to="/mainmeal"><button>Show</button></Link>
    </div>
    </>
  )
}
