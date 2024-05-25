import Fab from '@mui/material/Fab';
const DefaultFab = (props) => {
    return  <Fab {...props}>
                {props.children}
            </Fab>
}

export default DefaultFab;