import IMG from "./assets/html.webp"
const card1 = "HTML"
import { useState } from "react";

function Card(props) {
    const [purchased, setPurchased] = useState(false);

    function buyCourse(discount){
        console.log(props.name ," purchased with ", discount , "%discount");
        setPurchased(true);   
    }   
    return(
        <div className="card">
            <img src={IMG}  alt=""/>
            <h2>{props.name}</h2>
            <p>{props.price}</p>
            <button onClick={(event)=> {buyCourse(20)}}>Buy now</button>
            <p>{purchased ? 'Already purchased' : "Get it Now"}</p>
        </div>
    );
  
}

export default Card;