import IMG from "./assets/html.webp"
const card1 = "HTML"

function Card(props) {
   
         return(
        <div className="card">
            <img src={IMG}  alt=""/>
            <h2>{props.name}</h2>
            <p>{props.price}</p>
        </div>
    );
  
}

export default Card;