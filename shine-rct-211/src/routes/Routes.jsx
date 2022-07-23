import {Routes,Route} from "react-router-dom"




import Login from "../Components/login/Login"
import Register from "../Components/register/Register"


import {JobDetailsPage} from "../Pages/JobDetailsPage"
import { ApplicationInsights } from "../Components/JobDetails/ApplicationInsights"; 
import Alljobspage from "../Components/jobspage/Alljobspage";

const Routesall = () => {
    return (
        <div>
            <Routes >
                <Route path="/application" element={<ApplicationInsights />} />
                    <Route path="/login" element={<Login />}>

                    </Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/jobDetails/:id" element={<JobDetailsPage />} />
           
           
                    <Route path="/alljobs" element={ <Alljobspage /> }></Route>

           
           
            </Routes>
        </div>


    )
};

export default Routesall