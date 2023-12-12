import "./Pages.css";
import jol from "../../img/jollof.jpg";

export default function Jollof() {
  return (
    <>
      <div className="des">
        <img src={jol} alt={jol} />
        <div>
            <div className="desi">
                <h2>Ingredients</h2>
                <p>1. Vegetables of choice 
                   2. Pepper 
                   3. Rice
                   4. Salt
                   5. Lots of tomatoes 
                   6. Oil 
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
