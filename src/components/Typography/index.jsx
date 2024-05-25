import Typography from '@mui/material/Typography';

const DefaultTypography = (props) => {
    return  <Typography {...props}>
                {props.children}
            </Typography>
}

export default DefaultTypography;