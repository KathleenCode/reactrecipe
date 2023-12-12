import "./Pages.css";
import fruit from "../../img/fruitsalad.jpg";

export default function Fruit() {
  return (
    <>
     <div className="des">
        <img src={fruit} alt={fruit} />
        <div>
            <div className="desi">
                <h2>Ingredients</h2>
                <p>1. Any choice of fruits 
                   2. Vinegar 
                   3. Salt 
                   4. Pepper 
                   5. Lime 
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
