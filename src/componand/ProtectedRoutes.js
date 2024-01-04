import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {

    let isLoggedIn = false; 
    if (isLoggedIn) {

        return <Outlet/>
    }
    else return <Navigate to="/" />

};

export default ProtectedRoutes;