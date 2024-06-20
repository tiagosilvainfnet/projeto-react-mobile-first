import { Button as ButtonMaterial } from '@mui/material';
import { Button as ButtonNativeBase } from "native-base";

import { detectVariant } from '../../utils/conversor';

const DefaultButton = (props) => {
    return (
        props.material 
            ? <ButtonMaterial 
                {...props}
                variant={detectVariant(props.material, props.variant)}
            >{props.children}</ButtonMaterial>
            : <ButtonNativeBase 
                {...props}
                variant={detectVariant(props.material, props.variant)}
                colorScheme={props.color}
            >{props.children}</ButtonNativeBase>
    )
}

DefaultButton.defaultProps = {
    material: false,
    color: "primary",
    variant: "solid"
}

export default DefaultButton;