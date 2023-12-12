import { Link } from "react-router-dom";

export default function Back() {
  return (
    <>
    <div style={{display: "flex", justifyContent: "center"}}>
    <Link to="/" style={{padding: "1rem 1.7rem", border: "1px dashed #F8FF95", display: "flex", justifyContent: "center",
    // backgroundColor: "#FEFFAC", 
    backgroundImage: "linear-gradient(#F8FF95, #EBE76C, #FFFD8C)",
    width: "10vw", margin: "1rem", borderRadius: "10px", fontWeight: "bold"}}>PREVIOUS RECIPE</Link>
   </div>
    </>
  )
}
