
import { Routes ,Route } from "react-router-dom";


import Cardlist from "../src/component/Cardlist/Cardlist";
import Carddetail from "../src/component/Carddetail/Carddetail";
function Coustomroutes(){
return(
<Routes>
    <Route path="/" element={<Cardlist/>}/>
    <Route path="/card/:id" element={<Carddetail/>}/>
</Routes>
)
}
export default Coustomroutes;