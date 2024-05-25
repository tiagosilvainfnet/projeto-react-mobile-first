import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../utils/auth";
import { useEffect, useState } from "react";
import { Fab, Grid, IconButton, TableList } from "../../components";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

const ProductList = (props) => {
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const headers = ["ID", "Name", "Price", "Description", "Quantity"];
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Product 1",
            price: 100,
            description: "Product 1 description",
            quantity: 5,
        },
        {
            id: 2,
            name: "Product 2",
            price: 200,
            description: "Product 2 description",
            quantity: 5,
        },
        {
            id: 3,
            name: "Product 3",
            price: 300,
            description: "Product 3 description",
            quantity: 5,
        },
    ]);
    
    useEffect(() => {
        isLoggedIn(navigate);
        props.setRoute(window.location.pathname);
    }, []);

    const edit = (id) => {
        navigate(`/products/${id}`);
    };
        

    const reloadProducts = async () => {
        setProducts([
            {
                id: 4,
                name: "Product 4",
                price: 100,
                description: "Product 4 description",
                quantity: 5,
            },
            {
                id: 5,
                name: "Product 5",
                price: 200,
                description: "Product 5 description",
                quantity: 5,
            },
            {
                id: 6,
                name: "Product 6",
                price: 300,
                description: "Product 6 description",
                quantity: 5,
            },
        ]);
    };

    const _delete = (id) => {}

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
                            await reloadProducts();
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