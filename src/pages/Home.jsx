import Beverages from "../components/Beverages";
import Starter from "../components/Starter";
import MainMeal from "../components/MainMeal";
import Dessert from "../components/Dessert";


export default function Home() {
  return (
    <>
    <div style={{display: "flex", flexWrap: "wrap"}}>
    <Beverages />
    <Starter />
    <MainMeal />
    <Dessert />
    </div>
    </>
  )
}
