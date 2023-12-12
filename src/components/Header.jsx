import food from "../../img/food.jpg";
import "./Header.css";

export default function Home() {
  return (
    <>
      <div className="all">
        <div className="one">
          <span>RECIPES</span>
          <img src={food} alt={food} />
        </div>
        <div className="two">
        <h1>Sample Foods</h1>
          <p>With delicacies within reach: just a click,
            this app is a partial mimic of a traditional recipe book.
            Take a look at the plainly-written savory dishes. Enjoy !.
          </p>
        </div>
      </div>
    </>
  )
}

