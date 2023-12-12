import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import './App.css';
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Beverages from "./pages/BeveragesPage";
import Starter from "./pages/StarterPage";
import MainMeal from "./pages/MainMealPage";
import Dessert from "./pages/DessertPage";
import Fruit from "./pages/Fruit";
import Vegetable from "./pages/Vegetable";
import Soup from "./pages/Soup";
import Yoghurt from "./pages/Yoghurt";
import Orange from "./pages/Orange";
import Ampesi from "./pages/Ampesi";
import Fufu from "./pages/Fufu";
import Banku from "./pages/Jollof";
import Friedrice from "./pages/Friedrice";
import Jollof from "./pages/Jollof";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={< RootLayout />}>
    <Route index element={ <Home />} />
    <Route path="/beverages" element={<Beverages />} >
      <Route path="yoghurt" element={< Yoghurt />}/>
      <Route path="orange" element={<Orange />} />
    </Route>
    <Route path="/starter" element={<Starter />}>
      <Route path="fruit" element={ <Fruit />} />
      <Route path="vegetable" element={ < Vegetable /> } />
      <Route path="soup" element={< Soup />} />
    </Route>
    <Route path="/mainmeal" element={<MainMeal />} >
      <Route path="amp" element={<Ampesi /> } />
      <Route path="fufu" element={<Fufu /> } />
      <Route path="banku" element={<Banku />} />
      <Route path="jollof" element={<Jollof />} />
      <Route path="friedrice" element={<Friedrice />} />
    </Route>
    <Route path="/dessert" element={<Dessert />} />
    <Route path="*" element={<NotFound />} />
  </Route>
))


function App() {

  return  < RouterProvider router = { router }/>
}

export default App
