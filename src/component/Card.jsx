import "./card.css"
import { Link } from "react-router-dom";

function Card({image,id}){
    return(
        <div className=" container">
            <Link to={`card/${id}`}>     <div className="card_image"> <img src={image} alt="" /></div></Link>
   
            
           
        </div>
    )
}
export default Card