import { Button as ButtonMaterial } from '@mui/material';
import { Button as ButtonNativeBase } from "native-base";

import { detectVariant } from '../../utils/conversor';

const Button = (props) => {
    return (
        props.material 
            ? <ButtonMaterial 
                {...props}
                variant={detectVariant(props.material, props.variant)}
            >{props.text}</ButtonMaterial>
            : <ButtonNativeBase 
                {...props}
                variant={detectVariant(props.material, props.variant)}
                colorScheme={props.color}
            >{props.text}</ButtonNativeBase>
    )
}

Button.defaultProps = {
    material: false,
    color: "primary"
}

export default Button;