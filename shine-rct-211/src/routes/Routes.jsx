import {Routes,Route} from "react-router-dom"




import Login from "../Components/login/Login"
import Register from "../Components/register/Register"

import Home from "../Components/Homepage/Home"
import {JobDetailsPage} from "../Pages/JobDetailsPage"
import { ApplicationInsights } from "../Components/JobDetails/ApplicationInsights"; 
import { PrivateRoute } from "../Components/JobDetails/PrivateRoute"




import { ApplicationInsights } from "../Components/JobDetails/ApplicationInsights"; 
import Alljobspage from "../Components/jobspage/Alljobspage";


const Routesall = () => {
    return (
        <div>
            <Routes >
                <Route path="/" element={<Home/>}/>
                <Route path="/application-highlighter" element={<ApplicationInsights />} />
                    <Route path="/login" element={<Login />}>

                    </Route>
                    <Route path="/register" element={<Register />}></Route>

                <Route path="/jobDetails/:id" element={
                    <PrivateRoute>
                        <JobDetailsPage />
                    </PrivateRoute>
                } />

                    
           
           
                    <Route path="/alljobs" element={ <Alljobspage /> }></Route>

           
           

            </Routes>
        </div>


    )
};

export default Routesall