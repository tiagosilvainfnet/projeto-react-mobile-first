import { TextField as TextFieldMaterial } from '@mui/material';
import { Input as TextFieldNativeBase} from 'native-base';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

const TextField = (props) => {
    const constructTextFieldMaterial = (props) => {
        return props.decimal ?
            <FormControl fullWidth>
                <OutlinedInput {...props} startAdornment={<InputAdornment position="start">R$</InputAdornment>}/>
            </FormControl>
            : <TextFieldMaterial {...props}/>
    }

    return (
        props.material 
        ? constructTextFieldMaterial(props)
        : <TextFieldNativeBase {...props}/>
    )
}

TextField.defaultProps = {}

export default TextField;