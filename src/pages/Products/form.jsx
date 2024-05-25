import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../utils/auth";
import { Button, Grid, TextField, Typography } from "../../components";

const ProductForm = (props) => {
    const params = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({
        id: null,
        name: "",
        price: 0.0,
        description: "",
        quantity: 1,
    });
    
    useEffect(() => {
        isLoggedIn(navigate);
        props.setRoute(window.location.pathname);
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
            setData({
                id: 1,
                name: "Product 1",
                price: 100,
                description: "Product 1 description",
                quantity: 5,
            });
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setData({
            ...data,
            [name]: value
        });
    }

    useEffect(() => {
        save();
        load();
    }, []);

    return  <Grid sx={{
                marginTop: 2,
                marginBottom: 2
            }} container={true} spacing={2}>
                <Grid item={true} xs={12} md={2}></Grid>
                <Grid item={true} xs={12} md={8}>
                    <Grid container={true} spacing={2}>
                        <Grid item={true} xs={12}>
                            <Typography variant="h3" gutterBottom>
                                {params.id === "new" ? "Novo Produto" : "Editar Produto"}
                            </Typography>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <TextField 
                                material={true}
                                label="Nome"
                                type="text"
                                name="name"
                                size="large"
                                value={data.name}
                                fullWidth={true}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item={true} xs={12}>
                            <TextField 
                                material={true}
                                label="Descrição"
                                multiline={true}
                                rows={4}
                                size="large"
                                name="description"
                                value={data.description}
                                fullWidth={true}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item={true} xs={12}>
                            <TextField 
                                material={true}
                                label="Preço"
                                type="number"
                                decimal={true}
                                size="large"
                                name="price"
                                fullWidth={true}
                                value={data.price}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item={true} xs={12}>
                            <TextField 
                                material={true}
                                label="Quantidade"
                                type="number"
                                size="large"
                                name="quantity"
                                value={data.quantity}
                                fullWidth={true}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item={true} xs={12}>
                            <Button onPress={save}>{params.id === "new" ? "Salvar" : "Editar"}</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
};

export default ProductForm;