import { useEffect } from "react";
import { Button } from "../../components";
import { isLoggedIn } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import { saveData } from "../../utils/database";

const Dashboard = (props) => {
    const navigate = useNavigate();
    
    useEffect(() => {
        isLoggedIn(navigate);
        props.setRoute(window.location.pathname);
    }, []);

    return "";
};

export default Dashboard;