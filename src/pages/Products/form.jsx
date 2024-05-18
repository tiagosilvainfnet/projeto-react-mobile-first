import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../utils/auth";

const ProductForm = () => {
    const params = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        isLoggedIn(navigate);
    }, []);

    const save = () => {
        if(params.id === "new"){
            // TODO: Chamar função de salvar
            console.log("Criando");
        }else{
            // TODO: Chamar função de editar
            console.log("Editando");
        }
    }

    const load = () => {
        if(params.id !== "new"){
            // TODO: Carrega do backend
            console.log("Carrega do backend");
        }
    }

    useEffect(() => {
        save();
        load();
    }, []);

    return "ProductForm";
};

export default ProductForm;