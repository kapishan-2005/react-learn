import IMG from "./assets/html.webp"
const card1 = "HTML"

function Card(props) {
   
    function buyCourse(){
        console.log(props.name,"purchesed");
    }
    return(
        <div className="card">
            <img src={IMG}  alt=""/>
            <h2>{props.name}</h2>
            <p>{props.price}</p>
            <button onClick={buyCourse}>Buy now</button>
        </div>
    );
  
}

export default Card;