import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser, isLoggedIn } from "../../utils/auth";
import { Button, Grid, TextField, Typography } from "../../components";
import { getData, loadData, saveData, updateData } from "../../utils/database";

const ProductForm = (props) => {
    const params = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({
        id: null,
        name: "",
        price: 0.0,
        description: "",
        quantity: 1,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    });
    
    useEffect(() => {
        isLoggedIn(navigate);
        props.setRoute(window.location.pathname);
    }, []);

    const save = async () => {
        const d = {
                'name': data.name,
                'price': data.price,
                'quantity': data.quantity,
                'description': data.description,
                'created_at': data.created_at,
                'updated_at': data.updated_at,
                'user_uuid': getUser()?.uid
            }

        if(data.name === "") return;

        if(params.id === "new"){
            await saveData('product', d);
        }else{
            d['updated_at'] = new Date().toISOString();
            await updateData('product', d, params.id);
        }
        alert("Salvo com sucesso!");
        navigate('/products');
    }

    const load = async () => {
        const id = params.id;
        if(id !== "new"){
            const result = await getData('product', id);
            setData({
                id: params.id,
                name: result.name,
                price: result.price,
                description: result.description,
                quantity: result.quantity,
                created_at: result.created_at,
                updated_at: result.updated_at,
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