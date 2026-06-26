import IMG from "./assets/html.webp"
const card1 = "HTML"
import { useState } from "react";

function Card(props) {
    const [purchased, setPurchased] = useState(false);
    const [discount , setDiscount] = useState(props.price)
    function buyCourse(amt){
        console.log(props.name ," purchased with ", discount , "%discount");
        setPurchased(true);   
        setDiscount(discount-amt);
    }   
    return(
       props.name && <div className ="card">
            <img src={IMG}  alt=""/>
            <h2>{props.name}</h2>
            <p>{discount}</p>
            <button onClick={()=> buyCourse(20)}>Discount</button>
            <p>{purchased ? 'Already purchased' : "Get it Now"}</p>
        </div>
    );
  
}

export default Card;