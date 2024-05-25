import IconButton from '@mui/material/IconButton';

const DefaultIconButton = (props) => (
    <IconButton {...props}>
        {props.children}
    </IconButton>
);

export default DefaultIconButton;