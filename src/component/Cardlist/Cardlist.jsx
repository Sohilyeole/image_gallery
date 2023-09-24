import axios from "axios"
import "./cardlist.css"
import { useState,useEffect } from "react"
import Card from "../Card"

function Cardlist(){
    const [offset,setoffset]=useState(0);
    const [isLoading,setisLoading]=useState(true);
    const [nexturl,setnexturl]=useState("");
    const [preurl,setpreurl]=useState("")
    const[cardurl,setcardurl]=useState("https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=20")
    const [cardlist,setcardlist]=useState([])
  async function downloadcard(){
    const response= await axios.get(cardurl)
    console.log(response)
    const cardResults=response.data.photos;
    console.log(cardResults)
    setnexturl(`https://api.slingacademy.com/v1/sample-data/photos?offset=${offset+20}&limit=20`)
    setpreurl(`https://api.slingacademy.com/v1/sample-data/photos?offset=${offset-20}&limit=20`)
    
   
  
    const cardlistresult =cardResults.map((carddata)=>{ //res name ka variable banya aur map lagaya

        
        return {
            id:carddata.id,
            title:carddata.title,
            image:carddata.url,
            description:carddata.description,
           

        }
    })
   
    
    setcardlist(cardlistresult)
    setisLoading(false)
  }  
 
  useEffect(()=>{
    downloadcard();
},[cardurl])


return(
    <div className="card_list_wrapper">
   
    <div className="pokemon_wrapper">
    {
        (isLoading)?"Loading....":
        cardlist.map((p)=><Card title={p.title} image={p.image} key={p.id} id={p.id}/>)
    }
    </div>
    <div className="controls">
  <button  disabled={offset===0} onClick={()=>{setcardurl(preurl) ,setoffset(offset-20) }}>Pre</button>
  <button disabled={offset==100} onClick={()=>{setcardurl(nexturl),setoffset(offset+20)}}>Next</button>
    </div>
   
    </div>
)
}

export default Cardlist