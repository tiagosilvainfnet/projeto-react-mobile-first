import { TextField as TextFieldMaterial } from '@mui/material';
import { Input as TextFieldNativeBase} from 'native-base';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

const constructTextFieldMaterial = (props) => {
    return props.decimal ?
                <FormControl fullWidth>
                    <OutlinedInput {...props} startAdornment={<InputAdornment position="start">R$</InputAdornment>}/>
                </FormControl>
            : <TextFieldMaterial {...props}/>
}

const TextField = (props) => {
    return (
        props.material 
        ? constructTextFieldMaterial(props)
        : <TextFieldNativeBase {...props}/>
    )
}

export default TextField;