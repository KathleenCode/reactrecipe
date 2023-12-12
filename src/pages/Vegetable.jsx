import "./Pages.css";
import veg from "../../img/vegsalad.jpg";

export default function Vegetable() {
  return (
    <>
        <div className="des">
        <img src={veg} alt={veg} />
        <div>
            <div className="desi">
                <h2>Ingredients</h2>
                <p>1. Vegetable of choice 
                   2. Pepper 
                   3. Lime to add a taste
                   4. A pinch of salt 
                   5. Mayonnaise 
                   6. Vinegar 
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
