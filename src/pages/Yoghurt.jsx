import "./Pages.css";
import yog from "../../img/sobpinyoh.jpg";

export default function Yoghurt() {
  return (
    <>
      <div className="des">
        <img src={yog} alt={yog} />
        <div>
            <div className="desi">
                <h2>Ingredients</h2>
                <p>1. Yoghurt culture 
                   2. Milk 
                   3. A slice if fruit
                   4. Water 
                </p>
            </div>
            <div className="desp">
                <h2>Preparations</h2>
                <div>
                   <p> 1. Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                   <p>2. Libero exercitationem et, doloribus ipsam dolores natus ut adipisci doloremque sunt. </p>
                   <p>3. Illum corporis libero a quidem vel, quasi est ipsam quas maxime. </p>
                  <p> 4. Veniam error eligendi fugiat placeat vero mollitia blanditiis voluptatum obcaecati? </p>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}
