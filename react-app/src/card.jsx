import IMG from "./assets/html.webp"
const card1 = "HTML"

function Card(props) {
    if(props.show == true){
         return(
        <div className="card">
            <img src={IMG}  alt=""/>
            <h2>{props.name}</h2>
            <p>{props.price}</p>
        </div>
    );
    }

    else{
         return(
        <div className="card">Course not available</div>
         )
    }
  
}

export default Card;