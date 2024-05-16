import { Avatar, Grid, Checkbox, TextField, Button } from "../../components"
import backgroundLogin from "../../assets/images/background-login.jpg"
import logo from "../../assets/images/logo.svg";

const Login = (props) => {
    const gridInternalStyle = {
                            [`@media (max-width: ${props.breakpoints.large})`]: {
                                padding: '1em'
                            }
                        }

    return <Grid
                sx={{
                    marginTop: 0
                }}
                container={true} spacing={2}>
                <Grid 
                    sx={{
                        backgroundImage: `url(${backgroundLogin})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "100vh",
                        [`@media (max-width: ${props.breakpoints.large})`]: {
                            display: "none"
                        }
                    }}
                    item={true} sm={12} md={7} lg={8}></Grid>
                <Grid
                    item={true} sm={12} md={5} lg={4}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        [`@media (max-width: ${props.breakpoints.large})`]: {
                            height: "100vh"
                        }
                    }}>
                    <Grid 
                        container={true} 
                        spacing={2}
                        sx={{
                            paddingLeft: '0 !important',
                            padding: '1em',
                            [`@media (max-width: ${props.breakpoints.large})`]: {
                                paddingLeft: '16px !important',
                                paddingRight: '0 !important',
                            }
                        }}
                    >
                        <Grid item={true} xs={12} sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            ...gridInternalStyle
                        }}>
                            <Avatar src={logo} sx={{
                                width: '120px',
                                height: '120px'
                            }}/>
                        </Grid>
                        <Grid item={true} xs={12} sx={gridInternalStyle}>
                            <TextField 
                                material={true}
                                label="E-mail"
                                type="email"
                                size="large"
                                fullWidth={true}
                            />
                        </Grid>
                        <Grid item={true} xs={12} sx={gridInternalStyle}>
                            <TextField 
                                fullWidth={true}
                                material={true}
                                label="Password"
                                type="password"
                                size="large"
                            />
                        </Grid>
                        <Grid 
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                ...gridInternalStyle
                            }}
                            item={true} xs={12}>
                            <Checkbox id="keep_login"/>
                            <label 
                                style={{
                                    marginLeft: "0.5em"
                                }}
                                htmlFor="keep_login">
                                Manter logado
                            </label>
                        </Grid>
                        <Grid item={true} xs={12} sx={gridInternalStyle}>
                            <Button>Entrar</Button>
                        </Grid>
                    </Grid>
                </Grid>
           </Grid>;
};

export default Login;