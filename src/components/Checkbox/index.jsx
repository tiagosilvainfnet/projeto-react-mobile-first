import { Checkbox as CheckboxMaterial } from '@mui/material';
import { Checkbox as CheckboxNativeBase } from 'native-base';

const DefaultCheckBox = (props) => {
    return (
        props.material
        ? <CheckboxMaterial {...props}/>
        : <CheckboxNativeBase {...props}/>
    )
}

export default DefaultCheckBox;