import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import "./Carddetail.css"

function Carddetails(){
    const {id}=useParams();
    console.log(id)
    const [card,setcard]=useState({})

    async function downloadcard(){

    const response= await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
    console.log(response)
    setcard({
        title:response.data.photo.title,
        image:response.data.photo.url,
      
        description:response.data.photo.description,
        user:response.data.photo.user
        
    })
    }
    useEffect(()=>{
        downloadcard()
    },[])
    return(
       <div className="carddetails_wrapper">
        
        <img className="cardimage" src={card.image}/>
        <div className="cardtitle"><span>{card.title}</span></div>
        <div className="cardtitle">user:{card.user}</div>
        <div className="cardtitle">description: {card.description}</div>
       
       </div>
    )
}
export default Carddetails