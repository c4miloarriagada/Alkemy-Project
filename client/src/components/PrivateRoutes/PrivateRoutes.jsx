import { Navigate } from "react-router-dom";
import { Home } from "../Home/Home";


export const PrivateRoutes = ( { route } ) => {

    const user = JSON.parse(localStorage.getItem("user"));

    
  
    return (!!user) ? <Home/> : <Navigate to ='/'/>

}
