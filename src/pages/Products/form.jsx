import {useParams} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";

const ProductForm = () => {
    const params = useParams();

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