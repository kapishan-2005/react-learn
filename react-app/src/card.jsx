import IMG from "./assets/html.webp"
const card1 = "HTML"
function Card() {
    return(
        <div className="card">
            <img src={IMG}  alt=""/>
            <h2>{card1}</h2>
            <p>html is a hyper text markup language</p>
        </div>
    );
}
export default Card;