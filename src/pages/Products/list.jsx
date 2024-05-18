import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../utils/auth";
import { useEffect } from "react";

const ProductList = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        isLoggedIn(navigate);
    }, []);

    return "ProductList";
};

export default ProductList;