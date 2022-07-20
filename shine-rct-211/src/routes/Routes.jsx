import {Routes,Route} from "react-router-dom"
import Home from "../components/Home"
import Login from "../components/login/Login"
import Register from "../components/register/Register"



const Routesall =()=>{
    return(
<div>
    <Routes >
        <Route path="/" element={<Home /> }>

        </Route>
<Route path ="/login" element={<Login />}>

</Route>
<Route path="/register" element={<Register/>}></Route>
<Route path="/jobDetails/:id" element={<JobDetailsPage />} />
    </Routes>
</div>


    )
}

export default Routesall