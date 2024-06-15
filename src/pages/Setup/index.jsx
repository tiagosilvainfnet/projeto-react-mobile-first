import { useEffect } from "react";
import { initSetup } from "../../utils/auth";

const Setup = (props) => {
    useEffect(() => {
        initSetup(props.auth);
        props.setRoute(window.location.pathname);
    }, []);

    return (
        <div>
            <h1>Setup</h1>
        </div>
    );
}

export default Setup;