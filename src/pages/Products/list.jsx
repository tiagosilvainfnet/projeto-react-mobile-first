import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../utils/auth";
import { useEffect, useState } from "react";
import { Fab, Grid, IconButton, TableList } from "../../components";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { deleteData, loadData } from "../../utils/database";

const ProductList = (props) => {
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const headers = ["ID", "Name", "Price", "Description", "Quantity"];
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        isLoggedIn(navigate);
        props.setRoute(window.location.pathname);
        load();
    }, []);

    const edit = (id) => {
        navigate(`/products/${id}`);
    };
    
    const load = async () => {
        const result = await loadData('product');
        const keys = Object.keys(result ? result : {});
        const d = []
        keys.forEach((key) => {
            d.push({
                id: key,
                name: result[key].name,
                price: result[key].price,
                description: result[key].description,
                quantity: result[key].quantity,
            });
        });

        setProducts(d);
    }

    const _delete = async (id) => {
        const confirm = window.confirm("Deseja deletar este produto?");
        if(confirm) {
            await deleteData('product', id);
            load();
        }
    }

    const show = (id) => {}

    const actions = (row) => {
        return  <>
                    <IconButton
                        color="success" 
                        onClick={() => edit(row.id)}
                    >
                        <EditIcon />
                    </IconButton>
                    <IconButton 
                        color="error" 
                        onClick={() => _delete(row.id)}
                    >
                        <DeleteIcon />
                    </IconButton>
                    <IconButton 
                        color="primary" 
                        onClick={() => show(row.id)}
                    >
                        <VisibilityIcon />
                    </IconButton>
                </>
    }

    return  <Grid container={true} spacing={2}
                sx={{marginTop: "20px"}}
            >
                <Grid item={true} xs={0} sm={2}></Grid>
                <Grid item={true} xs={12} sm={8}>
                    <TableList 
                        headers={headers}
                        rows={products}
                        page={page}
                        onChange={async (e, p) => {
                            setPage(p);
                        }}
                        actions={actions}
                        count={2}
                    />
                </Grid>
                <Fab 
                    sx={
                        {
                            position: "fixed",
                            bottom: "20px",
                            right: "20px",
                        }
                    } 
                    onClick={() => navigate("/products/new")
                }>
                    <AddIcon />
                </Fab>
            </Grid>
};

export default ProductList;