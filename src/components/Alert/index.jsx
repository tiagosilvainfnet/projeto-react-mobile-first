import { Alert } from '@mui/material';

const DefaultAlert = (props) => {
  return <Alert icon={props.icon} {...props}>
            {props.children}
         </Alert>
}

export default DefaultAlert;