import { Navigate } from "react-router-dom";
import { Home } from "../Home/Home";


export const PrivateRoutes = ( { children } ) => {

    const user = JSON.parse(localStorage.getItem("user"));

    
  
    return (!!user) ? children : <Navigate to ='/'/>

}
