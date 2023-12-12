import "./Pages.css";
import soup from "../../img/soup.jpg";

export default function Soup() {
  return (
    <div>
        <div className="des">
        <img src={soup} alt={soup} />
        <div>
            <div className="desi">
                <h2>Ingredients</h2>
                <p>1. Salt 
                   2. Water 
                   3. Pepper 
                   4. Fish / Meat 
                   5. Tomatoes 
                   6. Ginger 
                   7. Garlic  
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
    </div>
  )
}
