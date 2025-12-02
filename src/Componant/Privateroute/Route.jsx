import {Navigate} from "react-router-dom";

const Route=({children})=>{
    const token=localStorage.getItem("token");
    return token ? children : <Navigate to="/login"></Navigate>
};

export default Route;