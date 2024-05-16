import { TextField as TextFieldMaterial } from '@mui/material';
import { Input as TextFieldNativeBase} from 'native-base';

const TextField = (props) => {
    return (
        props.material 
        ? <TextFieldMaterial {...props}/>
        : <TextFieldNativeBase {...props}/>
    )
}

export default TextField;