import "./Pages.css";
import  oran from "../../img/brukorang.jpg";

export default function Orange() {
  return (
    <>
      <div className="des">
        <img src={oran} alt={oran} />
        <div>
            <div className="desi">
                <h2>Ingredients for Orange Juice</h2>
                <p>1. Oranges
                   2. Water 
                   3. Lime to add a taste
                   4. Sugar
                   5. A slice of pineapple 
                   6. Pineapple essence 
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
